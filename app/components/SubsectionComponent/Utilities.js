import React from 'react';
import PropTypes from 'prop-types';
import Utility from '../Utility';
import './subsection.scss';


const Utilities = ({ utilities }) => (
  <>
    {utilities && (
      <div className="subsection-utilities">
        {utilities.map((utility) => (
          <Utility utility={utility} key={utility.id} />
        ))}
      </div>
    )}
  </>
);

Utilities.propTypes = {
  utilities: PropTypes.array,
};

export default Utilities;
