import React from 'react';
import './partners.scss';
import PoltraxImage from 'images/poltrax.png';
import ProbitImage from 'images/probit.png';
import VisuImage from 'images/visu.png';
import IrrImage from 'images/irr.png';
import ZielonyImage from 'images/zielony.png';
import GWImage from 'images/gw.jpg';
import MTLogo from 'images/mt.svg';
import Logo from './Logo';

const PartnersComponent = () => (
  <div className="ps-content">
    <div className="ps-sponsors">
      <div className="ps-header">Wspierają nasz projekt</div>
      <div className="ps-logos">
        <Logo image={PoltraxImage} alt="Poltrax" url="https://poltrax.live/" />
        <Logo image={ProbitImage} alt="Probit" url="https://probit.com.pl/" />
        <Logo image={VisuImage} alt="Visuality" url="https://visuality.pl/" />
      </div>
    </div>
    <div className="ps-sponsors">
      <div className="ps-header">Partnerzy medialni</div>
      <div className="ps-logos">
        <Logo
          image={IrrImage}
          alt="Irracjonalnie"
          url="https://www.facebook.com/IrracjonalnieMaszerujacy"
        />
        <Logo image={ZielonyImage} alt="Zielony z wyboru" url="https://zieloniwpodrozy.pl/" />
        <Logo image={MTLogo} alt="Mapa Turystyczna" url="https://mapa-turystyczna.pl/" />
        <Logo image={GWImage} alt="Górskie Wyrypy" url="https://gorskiewyrypy.pl/" />
      </div>
    </div>
  </div>
);

export default PartnersComponent;
