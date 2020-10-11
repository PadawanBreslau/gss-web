import React from 'react';
import PropTypes from 'prop-types';
import { prepareEndpoint } from 'helpers/Url';

import generateActions from 'redux/api/actions';
import withRedux from 'hoc/withApi/ReduxConnect';

export default (hocOptions) => (PageComponent) => {
  @withRedux({
    ...hocOptions,
    mapDispatchToProps: (dispatch) => ({
      dispatch,
      initializeData: (props) => {
        const { api } = hocOptions;
        if (api.get) {
          const actions = generateActions(hocOptions.storeName);
          const formattedEndpoint = prepareEndpoint(api.get, props);
          dispatch(actions.initializePageData(formattedEndpoint));
        }
      },
      reloadData: (props) => {
        const { api } = hocOptions;
        if (api.get) {
          const actions = generateActions(hocOptions.storeName);
          const formattedEndpoint = prepareEndpoint(api.get, props);
          dispatch(actions.reloadPageData(formattedEndpoint));
        }
      },
    }),
  })
  class ReadHOC extends React.PureComponent {
    componentDidMount() {
      const { api } = hocOptions;
      if (api.get) {
        this.props.initializeData(this.props);
      }
    }

    render() {
      const { data } = this.props;
      // if (!data || !data.payload) return null;
      return (
        <PageComponent
          {...this.props}
          meta={data.meta}
          loading={data.loading}
          initialized={data.initialized}
          data={data ? data.payload : []}
        />
      );
    }
  }
  ReadHOC.propTypes = {
    data: PropTypes.object,
    initializeData: PropTypes.func,
  };
  return ReadHOC;
};
