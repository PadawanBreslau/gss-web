import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from './RegisterForm';

const RegisterPage = ({ onSignUp, form, touch }) => (
  <div className="register-form">
    <RegisterForm
      onSubmit={onSignUp}
      formName={form}
      touchField={touch}
    />
  </div>
);

RegisterPage.propTypes = {
  onSignUp: PropTypes.func,
  form: PropTypes.string.isRequired,
  touch: PropTypes.func.isRequired,
};

export default RegisterPage;
