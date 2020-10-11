import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { reduxForm } from 'redux-form/immutable';
import withAuth from 'hoc/withAuth';
import { redirect } from 'helpers/Url';
import { validateForm } from 'helpers/Validators';

import Login from 'components/LogInPage/LogInPage';

const LoginContainer = ({ handleSubmit, ...otherProps }) => (
  <Login {...otherProps} onLogin={handleSubmit} />
);

LoginContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export const LoginFormOptions = {
  form: 'login',
  onSubmit: (payload, dispatch, props) => {
    props.onLogin('/auth/sign_in', payload, redirect('/', props.location));
  },
  validate: (values, props) => {
    const rules = {
      email: ['required', 'email'],
      password: ['required', 'password'],
    };
    return validateForm(values, props, rules);
  },
};

export default withAuth()(injectIntl(reduxForm(LoginFormOptions)(LoginContainer)));
