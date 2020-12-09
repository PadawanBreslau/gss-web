import React from 'react';
import PropTypes from 'prop-types';
import IFrame from '../IFrame';
import './mt.scss';

const MapaTurystyczna = ({ mtUuid, horizontalMap, basic }) => (
  <>
    <div className={horizontalMap ? 'horizontal-map' : 'vertical-map'}>
      <IFrame mtUuid={mtUuid} horizontalMap={horizontalMap} basic={basic} />
    </div>
  </>
);

MapaTurystyczna.propTypes = {
  mtUuid: PropTypes.string,
  horizontalMap: PropTypes.bool,
  basic: PropTypes.bool,
};

export default MapaTurystyczna;
