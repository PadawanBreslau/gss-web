import React from 'react';
import IrrImage from 'images/irr.png';
import MoiImage from 'images/moi.jpg';
import './us.scss';

const AboutUsComponent = () => (
  <div className="us-content">
    <div className="us-header">Kim jesteśmy?</div>
    <div className="us-description-with-photo">
      <div className="us-photo">
        <img src={IrrImage} />
      </div>
      <div className="us-description">
        <span className="us-irr">Irracjonalnie Maszerujący</span>
        <span className="">
          Jesteśmy grupą pozytywnie zakręconych ludzi, co po górach chodzą, biegają czy nawet
          jeżdzą. Lubimy też mniej lub bardziej szalone wyzwania. Sporo naszej drupy pochodzi z
          Dolnego Śląska, więc wiemy, że w kwestii szlaków długodystansowych Główny Szlak Beskidzki
          i inne długie szlaki mocno ustępują Głównemu Szlakowi Beskidzkiemu. A Sudety same w sobie
          są przecież przepiękne, piekne gór, przyrody i skomplikowanej historii. Chcesz na poznać
          lepiej - sprawdz nas na FB:{' '}
          <a href="https://www.facebook.com/IrracjonalnieMaszerujacy">
            https://www.facebook.com/IrracjonalnieMaszerujacy
          </a>
        </span>
      </div>
    </div>
    <div className="us-description-with-photo">
      <div className="us-photo">
        <img src={MoiImage} />
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
