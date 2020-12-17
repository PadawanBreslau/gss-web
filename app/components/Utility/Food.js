import React from 'react';
import { Tooltip } from 'react-tippy';
import { Fastfood } from '@material-ui/icons';
import './utility.scss';

const Food = () => (
  <span className="icon">
    <Tooltip title={'Jedzenie'} position="bottom" delay={200}>
      <Fastfood />
    </Tooltip>
  </span>
);

export default Food;
