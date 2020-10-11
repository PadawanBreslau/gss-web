import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './text.scss';

const Text = ({ size, className, children }) => (
  <p className={cx(`text text--${size}`, className)}>{children}</p>
);

Text.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']).isRequired,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Text;
