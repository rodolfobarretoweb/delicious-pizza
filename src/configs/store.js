import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import * as reducers from './reducers';
import { DEVELOPMENT } from './constants';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

export default function configureStore() {
  const middlewares = [thunk];

  if(process.env.NODE_ENV === DEVELOPMENT) {
    middlewares.push(logger);
  }

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  const reducer = combineReducers(reducers);
  const store = createStoreWithMiddleware(reducer);

  return store;
}
