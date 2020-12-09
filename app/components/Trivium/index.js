import React from 'react';
import PropTypes from 'prop-types';
import { ZoomOutMap } from '@material-ui/icons';

import './trivia.scss';

const Trivium = ({ trivium }) => (
  <div className="trivium-box">
    {trivium.content}

    {trivium.lat && trivium.lon && (
      <a
        href={`https://mapa-turystyczna.pl/coords/${trivium.lat},${trivium.lon}#${trivium.lat}/${
          trivium.lon
        }/17`}
        target="_blank"
      >
        <span className="openMap">
          <ZoomOutMap />
        </span>
      </a>
    )}
  </div>
);

Trivium.propTypes = {
  trivium: PropTypes.object,
};

export default Trivium;
