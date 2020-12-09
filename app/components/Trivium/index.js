import React from 'react';
import PropTypes from 'prop-types';
import './trivia.scss';

const Trivium = ({ trivium }) => (
  <div className="trivium-box">
    {trivium.content}

  </div>
);

Trivium.propTypes = {
  trivium: PropTypes.object,
};

export default Trivium;
