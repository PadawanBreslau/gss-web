import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Subsection from './Subsection'
import { ChevronRight, OpenWith } from '@material-ui/icons';
import Info from '../Info';
import './sections.scss';

const Section = ({ section }) => {
  const [subsectionVisible, setSubsectionVisible] = useState(false);

  return (
    <div className='section'>
      <div className='title'>
        <span className='expandable-title' onClick={() => (setSubsectionVisible(!subsectionVisible))}>
          <ChevronRight fontSize="small" />
          <span>{section.start} - {section.finish}</span>
        </span>
        <Info
          length={section.length}
          ascent={section.ascent}
          descent={section.descent}
        />
        { false && <span className='open-with'>
          <Link to={`/sections/${section.id}`}><OpenWith fontSize="small" /></Link>
        </span> }
      </div>
      { subsectionVisible && <div className='subsections'>
        {section.subsections.map((subsection) => (<Subsection subsection={subsection} />))}
      </div>
      }
    </div>
  );
}

Section.propTypes = {
  section: PropTypes.object,
};

export default Section;
