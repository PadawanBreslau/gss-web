import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import './form.scss';

const useStyles = makeStyles({
  input: {
    background: '#fff',
    borderRadius: 8,
  },
  helperText: {
    marginBottom: '4px',
  },
});

const Form = ({ children, className, ...formProps }) => (
  <form {...formProps} className={classnames('form', className)}>
    {children}
  </form>
);
Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default Form;

export const renderTextField = ({
  label,
  input,
  placeholder,
  inputProps,
  meta: { touched, invalid, error },
  ...custom
}) => {
  const classes = useStyles();

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      error={touched && invalid}
      helperText={(touched && error) || ' '}
      variant="outlined"
      fullWidth
      size="small"
      FormHelperTextProps={{ classes: { root: classes.helperText } }}
      inputProps={{
        className: classes.input,
        'aria-label': 'description',
        ...inputProps,
      }}
      {...input}
      {...custom}
    />
  );
};
renderTextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  input: PropTypes.object,
  inputProps: PropTypes.object,
  meta: PropTypes.object,
};
