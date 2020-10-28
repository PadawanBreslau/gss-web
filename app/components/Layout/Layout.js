import React from 'react';
import PropTypes from 'prop-types';
import Actions from './Actions'
import './layout.scss';

const Layout = (props) => (
  <div className='page'>
      <div className='menu'>
        <div className='logo'>
           Logo
        </div>
        <div className='actions'>
          <Actions />
        </div>
      </div>
      <div className='content'>{props.children}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
