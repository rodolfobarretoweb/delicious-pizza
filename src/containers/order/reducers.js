import { combineReducers } from 'redux';
import {
  FETCH_FLAVORS,
  FETCH_SIZES,
  FETCH_INCREMENTS,
  SELECT_FLAVOR,
  SELECT_SIZE,
  SELECT_INCREMENTS
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

function incrementsReducer(state = [], action = {}) {
  if(action.type === FETCH_INCREMENTS) {
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

function selectIncrementsReducer(state = {}, action = {}) {
  if(action.type === SELECT_INCREMENTS) {
    return action.payload;
  }

  return state;
}

export default combineReducers({
  flavors: flavorsReducer,
  sizes: sizesReducer,
  increments: incrementsReducer,
  selectedFlavor: selectFlavorReducer,
  selectedSize: selectSizeReducer,
  selectedIncrements: selectIncrementsReducer
});
