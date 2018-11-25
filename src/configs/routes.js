import React from 'react';
import { Route, Switch } from 'react-router-dom';
import OrderFlavor from '../containers/order/flavor/view';
import OrderSize from '../containers/order/size/view';
import OrderIncrement from '../containers/order/increments/view';

export default () =>
  <Switch>
    <Route path = "/" exact component = { OrderFlavor }/>
    <Route path = "/order/size" component = { OrderSize }/>
    <Route path = "/order/increment" component = { OrderIncrement }/>
  </Switch>
