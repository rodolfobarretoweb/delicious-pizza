import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './configs/langs';
import configureStore from './configs/store';
import Order from './containers/order/view';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router><Order /></Router>
  </Provider>, document.getElementById('root')
);
