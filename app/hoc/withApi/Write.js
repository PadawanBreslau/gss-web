import React from 'react';
import { reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import history from 'utils/history';
import { redirect, prepareEndpoint } from 'helpers/Url';
import generateActions from 'redux/api/actions';
import withRedux from 'hoc/withApi/ReduxConnect';
import { injectIntl } from 'react-intl';
import { validateForm } from 'helpers/Validators';

export const generateFormOptions = (hocOptions) => {
  const {
    storeName,
    formName,
    validator = validateForm,
    fields,
    api,
    successRedirectUrl,
    customFormOptions,
    successCallback,
    reloadPageOnSuccess,
  } = hocOptions;

  return {
    form: formName,
    onSubmit: (payload, dispatch, props) => {
      const { submitPageData } = generateActions(storeName);
      let redirectCallback;
      if (successRedirectUrl) {
        redirectCallback = redirect(successRedirectUrl);
      } else if (reloadPageOnSuccess) {
        redirectCallback = redirect(history.location.pathname);
      }
      Object.keys(api).forEach((method) => {
        if (method !== 'get') {
          const formattedEndpoint = prepareEndpoint(api[method], props);
          dispatch(
            submitPageData(
              formattedEndpoint,
              method,
              { attributes: payload },
              successCallback || redirectCallback,
            ),
          );
        }
      });
    },
    validate: (values, props) => validator(values, props, fields),
    ...customFormOptions,
  };
};

export default (hocOptions) => (PageComponent) => {
  @withRedux(hocOptions)
  class WriteHOC extends React.PureComponent {
    componentDidMount() {
      const { match: params, dispatch, preloadedData } = this.props;
      const { fields } = hocOptions;

      const preloadedDataOrParams = params || preloadedData;

      if (preloadedDataOrParams) {
        const adaptedData = {};
        Object.keys(fields).forEach((key) => {
          adaptedData[key] = preloadedDataOrParams[key];
        });
        dispatch(this.props.initialize(adaptedData));
      }
    }

    render() {
      const { data, handleSubmit } = this.props;
      return <PageComponent handleSubmit={handleSubmit} data={data} {...this.props} />;
    }
  }
  WriteHOC.propTypes = {
    handleSubmit: PropTypes.func,
    data: PropTypes.object,
    match: PropTypes.object,
    preloadedData: PropTypes.object,
    initialize: PropTypes.func,
    dispatch: PropTypes.func,
  };

  return injectIntl(reduxForm(generateFormOptions(hocOptions))(WriteHOC));
};
