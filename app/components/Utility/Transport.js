import React from 'react';
import { Tooltip } from 'react-tippy';
import { Commute } from '@material-ui/icons';
import './utility.scss';

const Transport = ({ fontSize }) => (
  <span className="icon">
    <Tooltip title="Transport" position="bottom" delay={200}>
      <Commute fontSize={fontSize}/>
    </Tooltip>
  </span>
);

export default Transport;
