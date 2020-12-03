import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ChevronRight, OpenWith } from '@material-ui/icons';
import Subsection from './Subsection';
import Info from '../Info';
import './sections.scss';

const Section = ({ section }) => {
  const [subsectionVisible, setSubsectionVisible] = useState(false);

  return (
    <div className="section">
      <div className="title">
        <span className="expandable-title" onClick={() => setSubsectionVisible(!subsectionVisible)}>
          <ChevronRight fontSize="small" />
          <span className='section-title'>
            {section.start} - {section.finish}
          </span>
        </span>
        <div className='allinfo'>
          <Info length={section.length} ascent={section.ascent} descent={section.descent} />
        </div>
        {false && (
          <span className="open-with">
            <Link to={`/sections/${section.id}`}>
              <OpenWith fontSize="small" />
            </Link>
          </span>
        )}
      </div>
      {subsectionVisible && (
        <div className="subsections">
          {section.subsections.map((subsection) => (
            <Subsection subsection={subsection} />
          ))}
        </div>
      )}
    </div>
  );
};

Section.propTypes = {
  section: PropTypes.object,
};

export default Section;
