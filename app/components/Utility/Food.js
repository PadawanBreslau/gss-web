import React from 'react';
import { Tooltip } from 'react-tippy';
import { Fastfood } from '@material-ui/icons';
import './utility.scss';

const Food = ({ fontSize }) => (
  <span className="icon">
    <Tooltip title="Jedzenie" position="bottom" delay={200}>
      <Fastfood fontSize={fontSize} />
    </Tooltip>
  </span>
);

export default Food;
