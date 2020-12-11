import React from 'react';
import './partners.scss';

const Logo = ({ image, url, alt }) => (
  <div className="ps-logo">
    <a href={url} target="_blank">
      <img src={image} alt={alt} width="160" />
    </a>
  </div>
);

export default Logo;
