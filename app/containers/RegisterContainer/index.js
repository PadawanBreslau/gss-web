import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { reduxForm } from 'redux-form/immutable';
import withAuth from 'hoc/withAuth';
import { validateForm } from 'helpers/Validators';

import Register from 'components/Register/RegisterPage';

const RegisterContainer = ({ handleSubmit, ...otherProps }) => (
  <Register {...otherProps} onSignUp={handleSubmit} />
);

RegisterContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export const RegisterFormOptions = {
  form: 'registerForm',
  onSubmit: (payload, dispatch, props) => {
    const values = {
      email: payload.email.trim(),
      password: payload.password.trim(),
      name: `${payload.firstName.trim()} ${payload.lastName.trim()}`,
      firstName: payload.firstName.trim(),
      lastName: payload.lastName.trim(),
    };
    props.onSignUp('/auth', values);
  },
  validate: (values, props) => {
    const rules = {
      email: ['required', 'email'],
      firstName: ['required'],
      lastName: ['required'],
      password: ['required', 'password'],
      passwordConfirmation: ['confirm'],
    };
    return validateForm(values, props, rules);
  },
};

export default withAuth()(injectIntl(reduxForm(RegisterFormOptions)(RegisterContainer)));
