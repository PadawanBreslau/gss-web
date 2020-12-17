import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Utilities from './Utilities';
import Trivium from '../Trivium';
import MapaTurystyczna from '../MapaTurystyczna';
import Image from '../Image';
import Expander from './Expander';
import './subsection.scss';

const SubsectionComponent = ({ data }) => {
  const [utilitiesVisible, setUtilitiesVisible] = useState(false);
  const [triviaVisible, setTriviaVisible] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);

  return (
    <>
      <div className="subsection-view">
        <div className="subsection-view-title">
          {data.start} - {data.finish}
        </div>
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

        <Expander setter={setMapVisible} value={mapVisible} label="Mapa" />

        {mapVisible && (
          <div className="subsection-mt">
            {data.mtUuid && (
              <MapaTurystyczna mtUuid={data.mtUuid} horizontalMap={data.horizontalMap} />
            )}
          </div>
        )}

        <Expander
          setter={setUtilitiesVisible}
          value={utilitiesVisible}
          label="Noclegi, jedzenie i inne"
        />

        {utilitiesVisible && <Utilities utilities={data.utilities} />}

        <Expander setter={setTriviaVisible} value={triviaVisible} label="Ciekawostki" />

        {triviaVisible && data.trivia && data.trivia.length > 0 && (
          <div className="subsection-trivia">
            {data.trivia.map((trivium) => (
              <Trivium trivium={trivium} key={trivium.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const descriptionToArray = (description) => description?.split('\n');

SubsectionComponent.propTypes = {
  data: PropTypes.any,
};

export default SubsectionComponent;
