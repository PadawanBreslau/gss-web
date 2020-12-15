import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Utility from '../Utility';
import Trivium from '../Trivium';
import Info from '../Info';
import MapaTurystyczna from '../MapaTurystyczna';
import Image from '../Image';
import './subsection.scss';

const SubsectionComponent = ({ data }) => (
  <>
    <div className="subsection-view">
      <div className="subsection-view-title">
        {data.start} - {data.finish}
      </div>
      {false && (
        <div className="subsection-data">
          <Info
            length={data.length}
            ascent={data.ascent}
            descent={data.descent}
            trackColor={data.trackColor}
          />
        </div>
      )}
      <div className="subsection-description-with-photo">
        {data.images && data.images.length > 0 && data.images[0] !== undefined && (
          <div className="float">
            {' '}
            <Image image={data.images[0]} />{' '}
          </div>
        )}
        {descriptionToArray(data.description)?.map((block) => (
          <div className="text-block" key={block}>
            {block}
          </div>
        ))}
      </div>
      <div
        className={
          data.horizontalMap
            ? 'subsection-map-utilities-horizontal'
            : 'subsection-map-utilities-vertical'
        }
      >
        <div className="subsection-mt">
          {data.mtUuid && (
            <MapaTurystyczna mtUuid={data.mtUuid} horizontalMap={data.horizontalMap} />
          )}
        </div>
        <div className="trivia-and-utilities">
          <div className="subsection-utilities">
            {data.utilities &&
              data.utilities.map((utility) => <Utility utility={utility} key={utility.id} />)}
          </div>
          <div className="subsection-trivia">
            <span className="triviaLabel">Ciekawostki</span>
            {data.trivia &&
              data.trivia.map((trivium) => <Trivium trivium={trivium} key={trivium.id} />)}
          </div>
        </div>
      </div>
    </div>
  </>
);

const descriptionToArray = (description) => description?.split('\n');

SubsectionComponent.propTypes = {
  data: PropTypes.any,
};

export default SubsectionComponent;
