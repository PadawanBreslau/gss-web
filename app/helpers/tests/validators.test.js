/**
 * Test validators
 */

import { translationMessages } from '../../i18n';
import { validateForm } from '../Validators';

const enTranslationMessages = translationMessages.en;

const fakeIntl = {
  formatMessage: ({ id }) => enTranslationMessages[id],
};

const validate = (value, validator) =>
  validateForm({ field: value }, { intl: fakeIntl }, { field: [validator] });

describe('case', () => {
  it('should validate Email', () => {
    expect(validate('good@format.pl', 'email')).toEqual({});
    expect(validate('fakeFormat', 'email')).toEqual({
      field: enTranslationMessages['validators.email'],
    });
  });
  it('should validate Required', () => {
    expect(validate('good data', 'required')).toEqual({});
    expect(validate('', 'required')).toEqual({
      field: enTranslationMessages['validators.required'],
    });
  });
  it('should validate Password', () => {
    const passError = { field: enTranslationMessages['validators.password'] };
    expect(validate('enough-letters5', 'password')).toEqual({});
    expect(validate('', 'password')).toEqual(passError);
    expect(validate('4let', 'password')).toEqual(passError);
    expect(validate('30lettersistodamnlong-even-for-this-testing-password', 'password')).toEqual(
      passError,
    );
  });
  it('should validate Confirm password', () => {
    const validateConfirm = (value, validator) =>
      validateForm(
        {
          field: value,
          password: 'abc123',
        },
        { intl: fakeIntl },
        { field: [validator] },
      );
    const confirmError = { field: enTranslationMessages['validators.confirm'] };
    expect(validateConfirm('abc123', 'confirm')).toEqual({});
    expect(validateConfirm('', 'confirm')).toEqual(confirmError);
    expect(validateConfirm('dgd', 'confirm')).toEqual(confirmError);
  });
  it('should validate Numeric', () => {
    const numericError = { field: enTranslationMessages['validators.numeric'] };
    expect(validate('123', 'numeric')).toEqual({});
    expect(validate('', 'numeric')).toEqual(numericError);
    expect(validate('dgd', 'numeric')).toEqual(numericError);
  });
  it('should validate max length of string', () => {
    const maxLengthError = { field: enTranslationMessages['validators.maxLength'] };
    expect(validate('', { maxLength: 4 })).toEqual({});
    expect(validate('1234', { maxLength: 4 })).toEqual({});
    expect(validate('12345', { maxLength: 4 })).toEqual(maxLengthError);
  });
  it('should validate if value is not bigger than max', () => {
    const maxError = { field: enTranslationMessages['validators.maximum'] };
    expect(validate(3, { max: 4 })).toEqual({});
    expect(validate(4, { max: 4 })).toEqual({});
    expect(validate(5, { max: 4 })).toEqual(maxError);
  });
  it('should validate if value is not lower than min', () => {
    const minError = { field: enTranslationMessages['validators.minimum'] };
    expect(validate(3, { min: 4 })).toEqual(minError);
    expect(validate(4, { min: 4 })).toEqual({});
    expect(validate(5, { min: 4 })).toEqual({});
  });
});
