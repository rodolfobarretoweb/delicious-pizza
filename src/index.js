import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './configs/langs';
import configureStore from './configs/store';
import OrderFlavor from './containers/order/flavor/view';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router><OrderFlavor /></Router>
  </Provider>, document.getElementById('root')
);
