import React from 'react';
import PropTypes from 'prop-types';
import { ImportExport, DragHandle } from '@material-ui/icons';
import './info.scss';

const Info = ({ length, totalLength, ascent, descent, trackColor }) => (
  <>
    {length && <div className="subsection-length">{length} km </div>}
    {ascent && descent && (
      <div className="subsection-heights">
        <div className="subsection-ascent">{ascent}</div>
        <ImportExport fontSize="small" />
        <div className="subsection-descent">{descent}</div>
      </div>
    )}
    {totalLength && <div className="subsection-length">{totalLength} km</div>}

    {trackColor && false && (
      <div className={`subsection-color-${trackColor}`}>
        <DragHandle fontSize="small" />
      </div>
    )}
  </>
);

Info.propTypes = {
  length: PropTypes.number,
  totalLength: PropTypes.number,
  ascent: PropTypes.string,
  descent: PropTypes.string,
  trackColor: PropTypes.string,
};

export default Info;
