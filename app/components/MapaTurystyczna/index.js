import React from 'react';
import PropTypes from 'prop-types';
import IFrame from '../IFrame';
import './mt.scss';

const MapaTurystyczna = ({ mtUuid, horizontalMap }) => (
  <>
    <div className={horizontalMap ? 'horizontal-map' : 'vertical-map'}>
      <IFrame mtUuid={mtUuid} horizontalMap={horizontalMap} />
    </div>
  </>
);

MapaTurystyczna.propTypes = {
  mtUuid: PropTypes.string,
  horizontalMap: PropTypes.bool,
};

export default MapaTurystyczna;
