import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight, ChevronLeft } from '@material-ui/icons';
import Utility from '../Utility';
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

        <Expander setter={setMapVisible} value={mapVisible} label={"Mapa"} />

        {mapVisible && (
          <div className="subsection-mt">
            {data.mtUuid && (
              <MapaTurystyczna mtUuid={data.mtUuid} horizontalMap={data.horizontalMap} />
            )}
          </div>
        )}

        <Expander setter={setUtilitiesVisible} value={utilitiesVisible} label={"Noclegi, jedzenie i inne"} />

       { utilitiesVisible &&
        <div className="trivia-and-utilities">
          {data.utilities && (
            <div className="subsection-utilities">
              {data.utilities.map((utility) => (
                <Utility utility={utility} key={utility.id} />
              ))}
            </div>
          )}
        </div>
        }

        <Expander setter={setTriviaVisible} value={triviaVisible} label={"Ciekawostki"} />


        { triviaVisible &&
        <div className="subsection-trivia">
          {data.trivia && data.trivia.length > 0 && (
            <>
              <span className="triviaLabel">Ciekawostki</span>
              <>
                {data.trivia.map((trivium) => (
                  <Trivium trivium={trivium} key={trivium.id} />
                ))}
              </>
            </>
          )}
        </div>
        }
      </div>
    </>
  );
};

const descriptionToArray = (description) => description?.split('\n');

SubsectionComponent.propTypes = {
  data: PropTypes.any,
};

export default SubsectionComponent;
