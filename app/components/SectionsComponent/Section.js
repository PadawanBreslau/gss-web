import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, OpenWith } from '@material-ui/icons';
import MapaTurystyczna from 'components/MapaTurystyczna';
import Subsection from './Subsection';
import Info from '../Info';
import './sections.scss';

const Section = ({ section }) => {
  const { variation } = section;
  const [subsectionVisible, setSubsectionVisible] = useState(false);
  const className = `section-${variation}`;

  return (
    <div className={className}>
      <div className="title">
        <div className="expandable-title" onClick={() => setSubsectionVisible(!subsectionVisible)}>
          <div className="section-title">
            <div className="section-chevron">
              {!subsectionVisible ? (
                <ChevronRight fontSize="large" />
              ) : (
                <ChevronLeft fontSize="large" />
              )}
            </div>
            <div className="section-start-end">
              <div className="section-location">{section.start}</div>
              <div className="section-location">{section.finish}</div>
            </div>
          </div>
        </div>
        <div className="allinfo">
          {variation === 'main' && (
            <Info
              length={section.length}
              totalLength={section.totalLength}
              ascent={section.ascent}
              descent={section.descent}
            />
          )}
          {variation !== 'main' && (
            <Info length={section.length} ascent={section.ascent} descent={section.descent} />
          )}
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
        <div className="sectionWithMap">
          <div className="subsectionWithDescription">
            <div className="subsections">
              {section.subsections.map((subsection) => (
                <Subsection subsection={subsection} key={subsection.id} />
              ))}
            </div>
            <div className="sectionDescription">{section.description}</div>
          </div>
          <div className="minimap">
            <MapaTurystyczna mtUuid={section.mtUuid} horizontalMap basic withLink />
          </div>
        </div>
      )}
    </div>
  );
};

Section.propTypes = {
  section: PropTypes.object,
};

export default Section;
