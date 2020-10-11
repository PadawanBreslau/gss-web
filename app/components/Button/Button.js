import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './button.scss';

const Button = ({ children, variant, className, ...otherProps }) => (
  <button type="button" className={cx(`button button--${variant}`, className)} {...otherProps}>
    <span>{children}</span>
  </button>
);
Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  className: PropTypes.string,
};
Button.defaultProps = {
  variant: 'primary',
};

export default Button;
