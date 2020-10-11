import React from 'react';
import { change } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import withApiWrite from 'hoc/withApi/Write';
import generateActions from 'redux/api/actions';

export default (hocOptions) => (PageComponent) => {
  const { storeName, formName, fieldName, api } = hocOptions;

  @withApiWrite({
    storeName,
    formName,
    api: {},
    customFormOptions: {
      // eslint-disable-next-line consistent-return
      onSubmit: (payload, dispatch, props) => {
        const { id } = props;
        const { submitPageData } = generateActions(storeName);
        const singlePayload = {};
        singlePayload[fieldName] = payload ? payload[`${fieldName}-${id}`] : '';
        if (api.post)
          return dispatch(
            submitPageData(`${api.post}/${id}`, 'post', { attributes: singlePayload }, null, id),
          );
        if (api.put)
          return dispatch(
            submitPageData(`${api.put}/${id}`, 'put', { attributes: singlePayload }, null, id),
          );
      },
    },
  })
  class WriteInlineHOC extends React.PureComponent {
    componentDidMount() {
      const { initialValue, id, dispatch } = this.props;
      dispatch(change(formName, `${fieldName}-${id}`, initialValue));
    }

    render() {
      const { data, handleSubmit, id } = this.props;
      const isLoading = data.rowloading && data.rowloading[id];
      return (
        <PageComponent
          handleSubmit={handleSubmit}
          data={data}
          isLoading={isLoading}
          {...this.props}
        />
      );
    }
  }
  WriteInlineHOC.propTypes = {
    data: PropTypes.object,
    initialValue: PropTypes.string,
    id: PropTypes.string,
    handleSubmit: PropTypes.func,
    dispatch: PropTypes.func,
  };
  return WriteInlineHOC;
};
