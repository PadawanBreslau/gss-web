import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import './sections.scss';

const SectionsComponent = ({ data }) => {
  const [alternativesVisible, setAlternativesVisible] = useState(true);
  const label = 'Pokaż warianty alternatywne';

  return (
    <div>
      <div
        className="alternativesSwitch"
        onClick={() => setAlternativesVisible(!alternativesVisible)}
      >
        <input type="checkbox" checked={alternativesVisible} />
        <span className="alternativesSwitchLabel">{label}</span>
      </div>
      {alternativesVisible && (
        <div className="sections">
          {data.map((section) => (
            <Section section={section} key={data.id} />
          ))}
        </div>
      )}

      {!alternativesVisible && (
        <div className="sections">
          {data
            .filter((section) => section.variation === 'main')
            .map((section) => (
              <Section section={section} key={data.id} />
            ))}
        </div>
      )}
    </div>
  );
};

SectionsComponent.propTypes = {
  data: PropTypes.array,
};

export default SectionsComponent;
