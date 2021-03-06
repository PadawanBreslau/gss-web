import React from 'react';
import { Tooltip } from 'react-tippy';
import { Store } from '@material-ui/icons';
import './utility.scss';

const Shop = ({ fontSize }) => (
  <span className="icon">
    <Tooltip title="Sklep" position="bottom" delay={200} animation="fade">
      <Store fontSize={fontSize}/>
    </Tooltip>
  </span>
);

export default Shop;
