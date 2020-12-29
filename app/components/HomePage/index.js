import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Star, GetApp } from '@material-ui/icons';
import messages from './messages';
import config from '../../config';
import './homepage.scss';

const HomePage = () => (
  <div className="home-content">
    <p className="home-title">
      <FormattedMessage {...messages.header} />
    </p>
    <p className="home-lead">
      <FormattedMessage {...messages.lead} />
    </p>

    <div className="home-mt">
      <iframe
        title="Mapa turystyczna"
        src="https://mapa-turystyczna.pl/map/widget/route/h1l0p1/u9gl.html"
        height="660"
        frameBorder="0"
        width="100%"
      />
    </div>
    <div className='home-downloads'>
      <div className='home-track'><a href='/gss20-full-official.gpx'><GetApp />Całość trasy GSS 2.0</a></div>
      <div className='home-track'><a href='/gss20-bardo-duszniki-official.gpx'><GetApp />GSS 2.0: Bardo - Duszniki-Zdrój</a></div>
      <div className='home-track'><a href='/gss20-duszniki-mieroszow-official.gpx'><GetApp />GSS 2.0: Duszniki-Zdrój - Mieroszów</a></div>
      <div className='home-track'><a href='/gss20-mieroszow-czerniawa-official.gpx'><GetApp />GSS 2.0: Mieroszów - Czernica-Zdrój</a></div>
    </div>
    <div className="home-list">
      <div className="home-list-element">
        <Star />
        <span className="element">
          Trasa przeprowadzona po istniejących szlakach turystycznych.
        </span>
      </div>
      <div className="home-list-element">
        <Star />
        <span className="element">
          Przebiega przez większość pasm i znaczących szczytów Sudetów.
        </span>
      </div>
      <div className="home-list-element">
        <Star />
        <span className="element">
          Trasa prowadzi przez miejsca ciekawe krajobrazowo i historycznie
        </span>
      </div>
      <div className="home-list-element">
        <Star />
        <span className="element">Trasa zezwala na warianty alternatywne</span>
      </div>
    </div>
  </div>
);

export default HomePage;
