import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/Layout/Layout';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectUser from 'redux/user/selectors';
import userReducer from 'redux/user/reducer';
import userSaga from 'redux/user/saga';
import { LogOut } from 'redux/user/actions';
import withApiRead from 'hoc/withApi/Read';

export default (options) => (PageComponent) => {
  @withApiRead({
    storeName: 'profile',
    api: {
      get: '/user_profiles',
    },
  })
  class NavigationHOC extends React.PureComponent {
    render() {
      const layoutProps = {
        user: this.props.data || {},
        ...options,
      };
      return (
        <Layout {...layoutProps} location={this.props.location} onLogout={this.props.onLogout}>
          <PageComponent {...this.props} />
        </Layout>
      );
    }
  }
  NavigationHOC.propTypes = {
    onLogout: PropTypes.func,
    location: PropTypes.object,
    data: PropTypes.object,
  };
  const mapStateToProps = createStructuredSelector({
    user: makeSelectUser(),
  });
  function mapDispatchToProps(dispatch) {
    return {
      onLogout: () => {
        dispatch(LogOut('/auth/sign_out'));
      },
      showError: () => {},
    };
  }
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );
  const withUserReducer = injectReducer({ key: 'user', reducer: userReducer });
  const withUserSaga = injectSaga({ key: 'user', saga: userSaga });
  const ComposedNavigationHOC = compose(
    withUserReducer,
    withUserSaga,
    withConnect,
  )(NavigationHOC);

  return ComposedNavigationHOC;
};
