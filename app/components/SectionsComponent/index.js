import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section'
import './sections.scss';

const SectionsComponent = ({ data }) => (
  <div className='sections'>
    { data.map((section) => <Section section={section}/>) }
  </div>
);

SectionsComponent.propTypes = {
  data: PropTypes.array,
};

export default SectionsComponent;
