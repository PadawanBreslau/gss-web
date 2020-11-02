import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Eco } from '@material-ui/icons';
import './homepage.scss';

const HomePage = () => (
  <div className='content'>
    <p className='home-title'>
      <FormattedMessage {...messages.header} />
    </p>
    <p className='home-lead'>
      <FormattedMessage {...messages.lead} />
    </p>
  <div className='home-list'>
    <div className='home-list-element'><Eco /><span className='element'>Trasa przeprowadzona w większości po różnych szlakach turystycznych</span></div>
    <div className='home-list-element'><Eco /><span className='element'>Droga przebiega przez większość pasm Sudetów, wchodząc na najwyższe szczyty każdych z nich</span></div>
    <div className='home-list-element'><Eco /><span className='element'>Trasa została przeprowadzona przez wiele ciekawych historycznie miejsc</span></div>
    <div className='home-list-element'><Eco /><span className='element'>Trasa zezwalająca na warianty alternatywne</span></div>
  </div>
  <div className='home-mt'>
    <iframe src="https://mapa-turystyczna.pl/map/widget/route/h1l0p0/qf1u.html" height="680" frameBorder="0" width="100%"/>
  </div>
  </div>
);

export default HomePage;
