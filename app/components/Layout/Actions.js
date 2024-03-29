import React from 'react';
import { Link } from 'react-router-dom';
import FbImage from 'images/fb.png';
import GSSImage from 'images/GSS-official.png';
import './layout.scss';

const Actions = () => (
  <>
    <div className='logo'>
      <Link to="/">
        <img src={GSSImage} width="200px" alt="GSS logo" />
      </Link>
    </div>
    <div className="actions-links">
      <Link to="/route">
        <div className="action-button">TRASA</div>
      </Link>
      <Link to="/rules">
        <div className="action-button">ZASADY</div>
      </Link>
      <Link to="/fkt">
        <div className="action-button">REKORDY</div>
      </Link>
      <Link to="/us">
        <div className="action-button">O NAS</div>
      </Link>
      <Link to="/partners">
        <div className="action-button-web">PARTNERZY</div>
      </Link>
      <a href="https://www.facebook.com/gssreloaded" target="_blank">
        <img src={FbImage} width="20px" alt="FB logo" />
      </a>
    </div>
  </  >
);

export default Actions;
