import React from 'react';
import PropTypes from 'prop-types';
import { Hotel, Fastfood, Store, Commute } from '@material-ui/icons';
import './sections.scss';

const Utilities = ({ utilities }) => {
  console.log("aaa", utilities);

  const accommodation = utilities && utilities.some(
    (ut)=>(ut.utilityType === 'accommodation' || ut.utilityType === 'food_and_accommodation'))
  const food = utilities && utilities.some(
    (ut)=>(ut.utilityType === 'restaurant' || ut.utilityType === 'food_and_accommodation' || ut.utilityType === 'petrol_station' ))
  const shop = utilities && utilities.some(
    (ut)=>(ut.utilityType === 'shop' || ut.utilityType === 'petrol_station'))
  const transport = utilities && utilities.some(
    (ut)=>(ut.utilityType === 'bus_stop' || ut.utilityType === 'train_station'))

  return(<>
    { accommodation && <div className="utility"><Hotel fontSize="small" /></div>}
    { food  && <div className="utility"><Fastfood fontSize="small" /></div> }
    { shop  && <div className="utility"><Store fontSize="small" /></div> }
    { transport  && <div className="utility"><Commute fontSize="small" /></div> }
  </>
)}

Utilities.propTypes = {
  utilities: PropTypes.array,
};

export default Utilities;
