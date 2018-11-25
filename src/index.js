import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './configs/langs';
import configureStore from './configs/store';
import BaseLayout from './containers/shared/baseLayout/view';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router><BaseLayout /></Router>
  </Provider>, document.getElementById('root')
);
