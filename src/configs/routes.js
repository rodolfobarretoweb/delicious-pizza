import React from 'react';
import { Route, Switch } from 'react-router-dom';
import OrderFlavor from '../containers/order/flavor/view';

export default () =>
  <Switch>
    <Route path = "/" exact component = { OrderFlavor }/>
  </Switch>
