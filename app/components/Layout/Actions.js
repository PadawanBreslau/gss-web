import React from 'react';
import { Link } from 'react-router-dom';
import './layout.scss';

const Actions = () => (
  <div className='actions-links'>
    <Link to={'/'}><div className='action-button'>Start</div></Link>
    <Link to={'/route'}><div className='action-button'>Trasa</div></Link>
    <Link to={'/rules'}><div className='action-button'>Zasady</div></Link>
    <Link to={'/details'}><div className='action-button'>Szczegóły</div></Link>
    <Link to={'/us'}><div className='action-button'>O nas</div></Link>
  </div>
)

export default Actions;
