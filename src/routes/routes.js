import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Upcoming from '../containers/Upcoming';
import NotFound from '../components/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/upcoming" component={Upcoming} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
