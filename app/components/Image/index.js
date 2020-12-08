import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tippy';
import config from 'config';
import './image.scss';

const authorAndLicence = (image) => `${image.author} ${image.licence}`;

const Image = ({ image }) => (
  <div className="image">
    <div className="picture">
      <img src={config.api.url + image?.pictureMedium} className="imageDisplay" />
    </div>
    <div className="description">
      <span className="imageDescripion">{image.description}</span>

      {image.author && (
        <Tooltip title={authorAndLicence(image)} position="bottom" delay={250}>
          {image.url ? (
            <a href={image.url} className="author">
              {image.author}
            </a>
          ) : (
            <span className="author">{image.author}</span>
          )}
        </Tooltip>
      )}
    </div>
  </div>
);

Image.propTypes = {
  image: PropTypes.object,
};

export default Image;
