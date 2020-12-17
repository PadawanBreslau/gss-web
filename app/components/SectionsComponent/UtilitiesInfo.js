import React from 'react';
import PropTypes from 'prop-types';
import Hotel from '../Utility/Hotel';
import Food from '../Utility/Food';
import Shop from '../Utility/Shop';
import Transport from '../Utility/Transport';
import './sections.scss';

const Utilities = ({ utilities }) => {
  const accommodation =
    utilities &&
    utilities.some(
      (ut) => ut.utilityType === 'accommodation' || ut.utilityType === 'food_and_accommodation',
    );
  const food =
    utilities &&
    utilities.some(
      (ut) =>
        ut.utilityType === 'restaurant' ||
        ut.utilityType === 'food_and_accommodation' ||
        ut.utilityType === 'petrol_station',
    );
  const shop =
    utilities &&
    utilities.some((ut) => ut.utilityType === 'shop' || ut.utilityType === 'petrol_station');
  const transport =
    utilities &&
    utilities.some((ut) => ut.utilityType === 'bus_stop' || ut.utilityType === 'train_station');

  return (
    <>
      { accommodation && <Hotel fontSize="small" />}
      { food && <Food fontSize="small" />}
      { shop && <Shop fontSize="small" /> }
      { transport && <Transport fontSize="small" />}
    </>
  );
};

Utilities.propTypes = {
  utilities: PropTypes.array,
};

export default Utilities;
