import React from 'react';

import './fkt.scss';

const FKTComponent = () => (
  <div className="fkt-content">
    <div className="fkt-header">
      <h1>Najszybsi na trasie</h1>
    </div>
    <div>
      <h3>Kierunek Bardo-Świeradów</h3>
      <ul>
        <li>
          <span className='fkt-who'><a href='https://www.facebook.com/StrefaWedrowcy/' target='_blank'>Piotr Piasecki</a></span>
          <span className='fkt-how-much'>17d 10h</span>
          <span className='fkt-when'>Czerwiec, 2022</span>
        </li>
      </ul>
      <ul>
        <li>
          <span className='fkt-who'><a href='https://zieloniwpodrozy.pl/' target='_blank'>Mateusz Stawarz</a></span>
          <span className='fkt-how-much'>18d 9h 45m</span>
          <span className='fkt-when'>Wrzesień, 2021</span>
          <span className='fkt-url'><a href='https://www.youtube.com/watch?v=QZlnyDc-Pco&list=PLNVscyeSGA6Bbe-DBFsYsPUdfbKYPMWtI' target='_blank'>Relacja filmowa</a></span>
        </li>
      </ul>
      <ul>
        <li>
          <span className='fkt-who'><a href='' target='_blank'>Marcin Drozdowski</a></span>
          <span className='fkt-how-much'>19d 10h</span>
          <span className='fkt-when'>Maj, 2022</span>
        </li>
      </ul>
      <ul>
        <li>
          <span className='fkt-who'><a href='' target='_blank'>Ania Ca</a></span>
          <span className='fkt-how-much'>Na raty</span>
          <span className='fkt-when'>Jesień, 2021</span>
        </li>
      </ul>
    </div>
  </div>
);

export default FKTComponent;
