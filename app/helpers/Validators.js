const validatorFunctions = {
  required: (value, intl) => {
    if (value) return null;
    return intl.formatMessage({ id: 'validators.required' });
  },
  email: (value, intl) => {
    if (!value) {
      return null;
    }
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const match = emailPattern.test(value);
    return match ? null : intl.formatMessage({ id: 'validators.email' });
  },
  password: (value, intl) => {
    const minLength = 6;
    const maxLength = 30;

    const isPasswordCorrect = value && (value.length >= minLength && value.length <= maxLength);
    return isPasswordCorrect ? null : intl.formatMessage({ id: 'validators.password' });
  },
  numeric: (value, intl) => {
    const numberPattern = /^[0-9]+$/i;
    const match = numberPattern.test(value);
    if (!match) return intl.formatMessage({ id: 'validators.numeric' });
    return null;
  },
  confirm: (value, origin, intl) => {
    if (value !== origin) return intl.formatMessage({ id: 'validators.confirm' });
    return null;
  },
  maxLength: (value, maxLength, intl) => {
    if (value?.length > maxLength) {
      return intl.formatMessage({ id: 'validators.maxLength' }, { maxLength });
    }
    return null;
  },
  min: (value, min, intl) => {
    if (value < min) {
      return intl.formatMessage({ id: 'validators.minimum' }, { min });
    }
    return null;
  },
  max: (value, max, intl) => {
    if (value > max) {
      return intl.formatMessage({ id: 'validators.maximum' }, { max });
    }
    return null;
  },
};

function validateForm(values, props, fields) {
  const errors = {};
  if (!fields) return errors;
  Object.keys(fields).forEach((fieldName) => {
    const validators = fields[fieldName];
    validators.forEach((validator) => {
      let validatorName = validator;
      if (typeof validatorName === 'object') {
        [validatorName] = Object.keys(validatorName);
      }
      const validatorFunction = validatorFunctions[validatorName];
      if (typeof validatorFunction === 'function') {
        let error = null;
        if (validatorName === 'confirm') {
          error = validatorFunction(values[fieldName], values.password, props.intl);
        } else if (['maxLength', 'max', 'min'].includes(validatorName)) {
          error = validatorFunction(values[fieldName], validator[validatorName], props.intl);
        } else {
          error = validatorFunction(values[fieldName], props.intl);
        }
        if (error) errors[fieldName] = error;
      }
    });
  });
  return errors;
}

export { validateForm };
