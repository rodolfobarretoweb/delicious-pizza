import React from 'react';
import { Route, Switch } from 'react-router-dom';
import OrderFlavor from '../containers/order/flavor/view';
import OrderSize from '../containers/order/size/view';
import OrderIncrement from '../containers/order/increments/view';
import OrderResume from '../containers/order/resume/view';

export default () =>
  <Switch>
    <Route path = "/" exact component = { OrderSize }/>
    <Route path = "/order/flavor" component = { OrderFlavor }/>
    <Route path = "/order/increment" component = { OrderIncrement }/>
    <Route path = "/order/resume" component = { OrderResume }/>
  </Switch>
