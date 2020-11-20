import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, getFormSyncErrors } from 'redux-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import Text from 'components/Text';
import Form, { renderTextField } from 'components/Form';
import Button from '../Button/Button';

import './registerForm.scss';

const FORM_STEP_EMAIL = 'email';
const FORM_STEP_OTHERS = 'others';

const RegisterForm = ({ onSubmit, formErrors, touchField }) => {
  const intl = useIntl();
  const formStepTitles = useMemo(
    () => ({
      [FORM_STEP_EMAIL]: intl.formatMessage({ id: 'registerForm.emailStep.title' }),
      [FORM_STEP_OTHERS]: intl.formatMessage({ id: 'registerForm.othersStep.title' }),
    }),
    [intl.locale],
  );
  const [currentFormStep, setCurrentFormStep] = useState(FORM_STEP_EMAIL);

  const handleStepChangeToOthers = () => {
    if (!formErrors.email) {
      setCurrentFormStep(FORM_STEP_OTHERS);
    } else {
      touchField('email');
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit} className="margin-bottom-1">
        <Text size="lg" className="margin-bottom-1 text-left">
          {formStepTitles[currentFormStep]}
        </Text>
        {currentFormStep === FORM_STEP_EMAIL && (
          <Field name="email" component={renderTextField} type="text" placeholder="Email" />
        )}
        {currentFormStep === FORM_STEP_OTHERS && (
          <>
            <div className="register-form__name-fields">
              <Field
                name="firstName"
                component={renderTextField}
                type="text"
                placeholder={intl.formatMessage({ id: 'registerForm.firstNamePlaceholder' })}
              />
              <Field
                name="lastName"
                component={renderTextField}
                type="text"
                placeholder={intl.formatMessage({ id: 'registerForm.lastNamePlaceholder' })}
              />
            </div>
            <Field
              name="password"
              component={renderTextField}
              type="password"
              placeholder={intl.formatMessage({ id: 'registerForm.passwordPlaceholder' })}
            />
            <Field
              name="passwordConfirmation"
              component={renderTextField}
              type="password"
              placeholder={intl.formatMessage({ id: 'registerForm.confirmPasswordPlaceholder' })}
            />
          </>
        )}

        {currentFormStep === FORM_STEP_EMAIL && (
          <Button className="padding-side-5" onClick={handleStepChangeToOthers}>
            <FormattedMessage id="signUp" />
          </Button>
        )}
        {currentFormStep === FORM_STEP_OTHERS && (
          <Button type="submit">
            <FormattedMessage id="registerForm.submitButton" />
          </Button>
        )}
      </Form>
      {currentFormStep === FORM_STEP_EMAIL && (
        <>
          <Text size="sm" className="margin-bottom-1">
            <FormattedMessage id="registerForm.alreadyHaveAccount" />
            &nbsp;
            <Link to="/login">
              <FormattedMessage id="registerForm.logInHere" />
            </Link>
          </Text>
          <Text size="sm">
            <FormattedMessage id="registerForm.termsAndConditionsBeforeLink" />
            <a href="" target="_blank" rel="noopener noreferrer">
              <FormattedMessage id="registerForm.termsAndConditionsLink" />
            </a>
          </Text>
        </>
      )}
    </>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  formErrors: PropTypes.object,
  touchField: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  formErrors: getFormSyncErrors(props.formName)(state),
});
export default connect(mapStateToProps)(RegisterForm);
