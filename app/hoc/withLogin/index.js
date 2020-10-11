import React from 'react';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectUser from 'redux/user/selectors';
import userReducer from 'redux/user/reducer';
import userSaga from 'redux/user/saga';
import { LogIn } from 'redux/user/actions';

export default function withLogin() {
  return (PageComponent) => {
    class LoginHOC extends React.PureComponent {
      render() {
        return <PageComponent {...this.props} />;
      }
    }
    LoginHOC.propTypes = {};
    const mapStateToProps = createStructuredSelector({
      user: makeSelectUser(),
    });
    function mapDispatchToProps(dispatch) {
      return {
        onCredentialsLogin: (endpoint, payload, successCallback) => {
          dispatch(LogIn(endpoint, payload, successCallback));
        },
      };
    }
    const withConnect = connect(
      mapStateToProps,
      mapDispatchToProps,
    );
    const withUserReducer = injectReducer({
      key: 'user',
      reducer: userReducer,
    });
    const withUserSaga = injectSaga({ key: 'user', saga: userSaga });
    const ComposedLoginHOC = compose(
      withUserReducer,
      withUserSaga,
      withConnect,
    )(LoginHOC);

    return ComposedLoginHOC;
  };
}
