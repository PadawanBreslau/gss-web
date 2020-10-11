import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { isRegistered } from 'helpers/User';
import withUi from 'hoc/withUI';
import Layout from 'components/Layout/Layout';

@withUi()
class PrivateRoute extends React.Component {
  render() {
    const { component: Component, updateKey, computedMatch, onLogout, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(componentProps) => {
          if (isRegistered()) {
            return (
              <Layout onLogout={onLogout}>
                <Component {...componentProps} key={computedMatch.params[updateKey]} />
              </Layout>
            );
          }
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: componentProps.location },
              }}
            />
          );
        }}
      />
    );
  }
}
PrivateRoute.propTypes = {
  location: PropTypes.object,
  component: PropTypes.func,
  updateKey: PropTypes.string,
  computedMatch: PropTypes.object,
  onLogout: PropTypes.func,
};
export default PrivateRoute;
