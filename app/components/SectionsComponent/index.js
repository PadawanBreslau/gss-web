import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import './sections.scss';

const SectionsComponent = ({ data }) => {
  return (
    <div>
      <div className="sections">
        {data
          .filter((section) => section.variation === 'main')
          .map((section) => (
            <Section section={section} key={data.id} />
          ))}
      </div>
    </div>
  );
};

SectionsComponent.propTypes = {
  data: PropTypes.array,
};

export default SectionsComponent;
