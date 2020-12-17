import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight, ChevronLeft } from '@material-ui/icons';

const Expander = ({ setter, value, label }) => (
  <div className="expandable-subtitle" onClick={() => setter(!value)}>
    <div className="section-chevron">
      {value ? <ChevronLeft fontSize="large" /> : <ChevronRight fontSize="large" />}
    </div>
    <div>{label}</div>
  </div>
);

Expander.propTypes = {
  setter: PropTypes.func,
  value: PropTypes.bool,
  label: PropTypes.string,
};

export default Expander;
