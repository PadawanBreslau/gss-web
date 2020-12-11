import React from 'react';
import { Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

import HomePage from 'containers/HomePage/Loadable';
import RulesContainer from 'containers/RulesContainer/Loadable';
import AboutUsContainer from 'containers/AboutUsContainer/Loadable';
import PartnersContainer from 'containers/PartnersContainer/Loadable';
import OwnRouteContainer from 'containers/OwnRouteContainer/Loadable';
import LoginContainer from 'containers/LoginContainer/Loadable';
import RegisterContainer from 'containers/RegisterContainer/Loadable';
import SectionsContainer from 'containers/SectionsContainer/Loadable';
import SubsectionContainer from 'containers/SubsectionContainer/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import PublicRoute from './PublicRoute';

import '../../styles/global.scss';

export default function App() {
  return (
    <Container>
      <Switch>
        <PublicRoute exact path="/login" component={LoginContainer} />
        <PublicRoute exact path="/signup" component={RegisterContainer} />
        <PublicRoute exact path="/route" component={SectionsContainer} />
        <PublicRoute exact path="/own_route" component={OwnRouteContainer} />
        <PublicRoute exact path="/rules" component={RulesContainer} />
        <PublicRoute exact path="/us" component={AboutUsContainer} />
        <PublicRoute exact path="/partners" component={PartnersContainer} />
        <PublicRoute exact path="/subsections/:subsectionId" component={SubsectionContainer} />
        <PublicRoute exact path="/" component={HomePage} />
        <PublicRoute component={NotFoundPage} />
      </Switch>
    </Container>
  );
}
