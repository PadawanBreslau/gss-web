import React from 'react';
import { Tooltip } from 'react-tippy';
import { Hotel } from '@material-ui/icons';
import './utility.scss';

const HotelIcon = ({ fontSize }) => (
  <span className="icon">
    <Tooltip title="Nocleg" position="bottom" delay={200} >
      <Hotel fontSize={fontSize}/>
    </Tooltip>
  </span>
);

export default HotelIcon;
