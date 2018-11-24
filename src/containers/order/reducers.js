import { combineReducers } from 'redux';
import { FETCH_PIZZA_FLAVORS, FETCH_PIZZA_SIZES, SELECT_PIZZA_FLAVOR } from './actionsTypes';

function pizzaFlavorsReducer(state = [], action = {}) {
  if(action.type === FETCH_PIZZA_FLAVORS) {
    return action.payload;
  }

  return state;
}

function pizzaSizesReducer(state = [], action = {}) {
  if(action.type === FETCH_PIZZA_SIZES) {
    return action.payload;
  }

  return state;
}

function selectPizzaFlavorReducer(state = {}, action = {}) {
  if(action.type === SELECT_PIZZA_FLAVOR) {
    return action.payload;
  }

  return state;
}

export default combineReducers({
  pizzaFlavors: pizzaFlavorsReducer,
  pizzaSizes: pizzaSizesReducer,
  selectPizzaFlavor: selectPizzaFlavorReducer
});
