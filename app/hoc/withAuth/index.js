import React from 'react';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectUser from 'redux/user/selectors';
import userReducer from 'redux/user/reducer';
import userSaga from 'redux/user/saga';
import { LogIn, SignUp, PasswordReset, SetPassword } from 'redux/user/actions';
import { showUiError } from 'redux/UI/actions';

export default function withAuth() {
  return (PageComponent) => {
    class AuthHOC extends React.PureComponent {
      render() {
        return <PageComponent {...this.props} />;
      }
    }
    AuthHOC.propTypes = {};
    const mapStateToProps = createStructuredSelector({
      user: makeSelectUser(),
    });
    function mapDispatchToProps(dispatch) {
      return {
        onLogin: (endpoint, payload, successCallback) => {
          dispatch(LogIn(endpoint, payload, successCallback));
        },
        onSignUp: (endpoint, payload, successCallback) => {
          dispatch(SignUp(endpoint, payload, successCallback));
        },
        onPasswordReset: (endpoint, payload) => {
          dispatch(PasswordReset(endpoint, payload));
        },
        onPasswordSet: (endpoint, payload) => {
          dispatch(SetPassword(endpoint, payload));
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
    const ComposedAuthHOC = compose(
      withUserReducer,
      withUserSaga,
      withConnect,
    )(AuthHOC);

    return ComposedAuthHOC;
  };
}
