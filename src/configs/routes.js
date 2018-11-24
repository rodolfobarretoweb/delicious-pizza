import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Order from '../containers/order';

export default () =>
  <Switch>
    <Route path = "/" exact component = { Order }/>
  </Switch>
