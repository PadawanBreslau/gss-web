import React from 'react';
import PropTypes from 'prop-types';
import { Link }  from 'react-router-dom';
import config from 'config';
import Utility from '../Utility';
import Info from '../Info';
import MapaTurystyczna from '../MapaTurystyczna';
import './subsection.scss';

const SubsectionComponent = ({ data }) => (
  <>
    <div className='subsection'>
      <div className='subsection-title'>{data.start} - {data.finish}</div>
      <div className='subsection-data'>
        <Info
          length={data.length}
          ascent={data.ascent}
          descent={data.descent}
          trackColor={data.trackColor}
        />
      </div>
      <div className='subsection-description-with-photo'>
        {data.images && data.images !== [] && <div className='float'> <img src={config.api.url + data.images[0]?.pictureMedium} /> </div>}
        {descriptionToArray(data.description)?.map((block) => (<div className="text-block">{block}</div>))}
      </div>
      <div className={data.horizontalMap ? 'subsection-map-utilities-horizontal' : 'subsection-map-utilities-vertical'}>
        <div className='subsection-mt'>
          {data.mtUuid && <MapaTurystyczna mtUuid={data.mtUuid} horizontalMap={data.horizontalMap} />}
        </div>
        <div className='subsection-utilities'>
          {data.utilities && data.utilities.map((utility) => (<Utility utility={utility} />))}
        </div>
      </div>
      <div className='subsection-navigation'>
        {data.previousSubsection && <Link to={`/subsections/${data.previousSubsection}`}><span>Poprzedni odcinek</span></Link>}
        {data.nextSubsection && <Link to={`/subsections/${data.nextSubsection}`}><span>Następny odcinek</span></Link>}
      </div>
    </div>
  </>
);


const descriptionToArray = (description) => {
  return description?.split("\n");
};

SubsectionComponent.propTypes = {
  data: PropTypes.object,
};

export default SubsectionComponent
