import React from 'react';
import PropTypes from 'prop-types';
import './utility.scss';

const Utility = ({ utility }) => (
  <div className='utility-box'>
    Utility
  </div>
);

Utility.propTypes = {
  utility: PropTypes.object,
};

export default Utility;
