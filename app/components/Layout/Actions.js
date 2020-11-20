import React from 'react';
import { Link } from 'react-router-dom';
import './layout.scss';

const Actions = () => (
  <div className="actions-links">
    <Link to="/">
      <div className="action-button">START</div>
    </Link>
    <Link to="/route">
      <div className="action-button">TRASA</div>
    </Link>
    <Link to="/rules">
      <div className="action-button">ZASADY</div>
    </Link>
    <Link to="/us">
      <div className="action-button">O NAS</div>
    </Link>
  </div>
);

export default Actions;
