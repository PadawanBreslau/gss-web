import React from 'react';
import PropTypes from 'prop-types';
import config from 'config';
import { Hotel, Fastfood, Store, Commute, Phone, Public } from '@material-ui/icons';
import { accommodation, food, shop, transport } from './utilityType';
import './utility.scss';

const Utility = ({ utility }) => (
  <div className='utility-box'>
    <div className='utility-title'>
      <span>{utility.name}</span>
      {accommodation(utility) && <span className='icon'><Hotel /></span>}
      {food(utility) && <span className='icon'><Fastfood /></span>}
      {shop(utility) && <span className='icon'><Store /></span>}
      {transport(utility) && <span className='icon'><Commute /></span>}
    </div>
    <div className='utility-address'>
      {utility.address}
    </div>
    <div className='utility-address-and-photo'>
      {utility.imageThumbnail && <div className='utility-photo'><img src={config.api.url + utility.imageThumbnail} alt="Zdjecie"/></div> }
      <div className='utility-phone-and-url'>
        {utility.phoneNumber && <><p className='utility-info'><Phone /><span className='utility-info'>
          <a href={`tel:${utility.phoneNumber}`}>{utility.phoneNumber}</a></span></p></>}
        {utility.website && <><p className='utility-info'><Public /><span className='utility-info'>
          <a href={utility.website} target="_blank">Strona WWW</a></span></p></>}
      </div>
    </div>
  </div>
);



Utility.propTypes = {
  utility: PropTypes.object,
};

export default Utility;
