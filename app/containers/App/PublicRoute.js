import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { isRegistered } from 'helpers/User';
import withUi from 'hoc/withUI';
import Layout from 'components/Layout/Layout';

@withUi()
class PublicRoute extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { component: Component, allowLoggedUser, onLogout, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(componentProps) => {
          if (!allowLoggedUser && isRegistered()) {
            return (
              <Redirect
                to={{
                  pathname: '/',
                  state: { from: componentProps.location },
                }}
              />
            );
          }
          return (
            <Layout onLogout={isRegistered() ? onLogout : null}>
              <Component {...componentProps} />
            </Layout>
          );
        }}
      />
    );
  }
}
PublicRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.object,
  ui: PropTypes.object,
  onLogout: PropTypes.func,
  allowLoggedUser: PropTypes.bool,
};
export default PublicRoute;
