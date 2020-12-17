import React from 'react';
import { Tooltip } from 'react-tippy';
import { Commute } from '@material-ui/icons';
import './utility.scss';

const Transport = () => (
  <span className="icon">
    <Tooltip title={'Transport'} position="bottom" delay={20}>
      <Commute />
    </Tooltip>
  </span>
);

export default Transport;
