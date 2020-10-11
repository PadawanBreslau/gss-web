import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Box } from '@material-ui/core';
import Text from 'components/Text';
import LogInForm from './LogInForm';

import './loginForm.scss';

const LogInPage = ({ onLogin }) => (
  <div className="login-form">
    <LogInForm
      onSubmit={onLogin}
    />
    <Box my={2}>
      <Text size="sm">
        <Link to="reset_password">
          <FormattedMessage id="logInForm.forgotPassword" />
        </Link>
      </Text>
    </Box>
    <Box my={2}>
      <Text size="sm">
        <FormattedMessage id="logInForm.noAccount" />{' '}
        <Link to="signup">
          <FormattedMessage id="logInForm.signUpHere" />
        </Link>
      </Text>
    </Box>
  </div>
);

LogInPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LogInPage;
