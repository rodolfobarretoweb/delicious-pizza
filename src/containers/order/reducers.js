import { combineReducers } from 'redux';
import {
  FETCH_FLAVORS, FETCH_SIZES, SELECT_FLAVOR, SELECT_SIZE, FETCH_CURRENT_ORDER, SAVE_ORDER
} from './actionsTypes';

function flavorsReducer(state = [], action = {}) {
  if(action.type === FETCH_FLAVORS) {
    return action.payload;
  }

  return state;
}

function sizesReducer(state = [], action = {}) {
  if(action.type === FETCH_SIZES) {
    return action.payload;
  }

  return state;
}

function selectFlavorReducer(state = {}, action = {}) {
  if(action.type === SELECT_FLAVOR) {
    return action.payload;
  }

  return state;
}

function selectSizeReducer(state = {}, action = {}) {
  if(action.type === SELECT_SIZE) {
    return action.payload;
  }

  return state;
}

function currentOrderReducer(state = {}, action = {}) {
  switch(action.type) {
    case FETCH_CURRENT_ORDER:
      return action.payload;
    case SAVE_ORDER:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  flavors: flavorsReducer,
  sizes: sizesReducer,
  selectedFlavor: selectFlavorReducer,
  selectedSize: selectSizeReducer,
  currentOrder: currentOrderReducer
});
