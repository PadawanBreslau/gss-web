import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Info from '../Info';
import Utilities from './UtilitiesInfo';
import './sections.scss';

const Subsection = ({ subsection }) => (
  <div className="subsection">
    <Link to={`/subsections/${subsection.id}`}>
      <div className="subsection-title">
        {subsection.start} - {subsection.finish}
      </div>
    </Link>
    <div className="allinfo">
      <Info
        length={subsection.length}
        ascent={subsection.ascent}
        descent={subsection.descent}
        trackColor={subsection.trackColor}
      />
      <Utilities utilities={subsection.utilities} />
    </div>
  </div>
);

Subsection.propTypes = {
  subsection: PropTypes.object,
};

export default Subsection;
