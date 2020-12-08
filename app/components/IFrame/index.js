import React from 'react';
import PropTypes from 'prop-types';
import './info.scss';

const IFrame = ({ horizontalMap, mtUuid }) => (
  <>
    <iframe
      title='Mapa turystyczna'
      src={`https://mapa-turystyczna.pl/map/widget/route/h1l0p1/${mtUuid}.html`}
      height={horizontalMap ? '680' : '820'}
      width="100%"
      frameBorder="0"
    />
  </>
);

IFrame.propTypes = {
  mtUuid: PropTypes.string,
  horizontalMap: PropTypes.bool,
};

export default IFrame;
