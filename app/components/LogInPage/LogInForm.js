import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { FormattedMessage, useIntl } from 'react-intl';
import Form, { renderTextField } from 'components/Form';
import Button from '../Button/Button';

const LogInForm = ({ onSubmit }) => {
  const intl = useIntl();
  return (
    <>
      <Form onSubmit={onSubmit} className="margin-bottom-1">
        <Field
          name="email"
          component={renderTextField}
          type="text"
          placeholder={intl.formatMessage({ id: 'logInForm.emailPlaceholder' })}
        />
        <Field
          name="password"
          component={renderTextField}
          type="password"
          placeholder={intl.formatMessage({ id: 'logInForm.passwordPlaceholder' })}
        />
        <Button className="padding-side-5" type="submit">
          <FormattedMessage id="logIn" />
        </Button>
      </Form>
    </>
  );
};

LogInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LogInForm;
