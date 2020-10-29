import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ImportExport, DragHandle } from '@material-ui/icons';
import './sections.scss';

const Info = ({ length, ascent, descent, trackColor }) => (
  <>
    { length && <div className='subsection-data'>{length} km</div> }
    { ascent && descent &&
      <>
        <div className='subsection-ascent'>{ascent}</div><ImportExport fontSize="small" />
        <div className='subsection-descent'>{descent}</div>
      </>
    }
    {trackColor && <div className={`subsection-color-${trackColor}`}><DragHandle fontSize="small" /></div>}
  </>
);

Info.propTypes = {
  length: PropTypes.number,
  ascent: PropTypes.number,
  descent: PropTypes.number,
  trackColor: PropTypes.string,
};

export default Info;
