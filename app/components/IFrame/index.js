import React from 'react';
import PropTypes from 'prop-types';
import './info.scss';

const mapHeaders = (basic) => (basic ? 'h0l0p0' : 'h1l0p1');

const height = (horizontalMap, basic) => {
  if (basic) {
    return 300;
  }

  return horizontalMap ? '680' : '820';
};

const IFrame = ({ horizontalMap, mtUuid, basic }) => (
  <>
    <iframe
      title="Mapa turystyczna"
      src={`https://mapa-turystyczna.pl/map/widget/route/${mapHeaders(basic)}/${mtUuid}.html`}
      height={height(horizontalMap, basic)}
      width="100%"
      frameBorder="0"
    />
  </>
);

IFrame.propTypes = {
  mtUuid: PropTypes.string,
  horizontalMap: PropTypes.bool,
  basic: PropTypes.bool,
};

export default IFrame;
