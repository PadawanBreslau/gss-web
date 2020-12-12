import React from 'react';
import IrrImage from 'images/irr.png';
import MoiImage from 'images/moi.jpg';
import './us.scss';

const AboutUsComponent = () => (
  <div className="us-content">
    <div className="us-description-with-photo">
      <div className="us-photo">
        <img src={IrrImage} style={{ width: '90%' }} alt="Irracjonalnie maszerujący" />
      </div>
      <div className="us-description">
        <span className="us-irr">Irracjonalnie Maszerujący</span>
        <span>
          Jesteśmy grupą pozytywnie zakręconych ludzi, co po górach chodzą, biegają czy nawet jeżdzą
          rowerami. Lubimy uczestniczyć w mniej lub bardziej szalonych wyzwaniach. Większość naszej
          ekipy pochodzi z Dolnego Śląska, więc wiemy, że w kwestii szlaków długodystansowych Sudety
          mocno ustępują Beskidom. Jako fani tego rejonu Polski chcieliśmy zaprosić turystów z
          całego kraju na wyzwanie o podobnym stopniu trudności co ma Główny Szlak Beskidzki.
        </span>
        <span>
          Chcesz na poznać lepiej:{' '}
          <a href="https://www.facebook.com/IrracjonalnieMaszerujacy">
            https://www.facebook.com/IrracjonalnieMaszerujacy
          </a>
        </span>
      </div>
    </div>
    <div className="us-description-with-photo">
      <div className="us-photo">
        <img src={MoiImage} style={{ width: '90%' }} alt="Staszek Zawadzki" />
      </div>
      <div className="us-description">
        <span className="us-irr">Staszek Zawadzki</span>
        <span className="">
          Założyciel Irracjonalnie Maszerujących, pomysłowdawca i architekt trasy GSS 2.0.
        </span>
      </div>
    </div>
  </div>
);

export default AboutUsComponent;
