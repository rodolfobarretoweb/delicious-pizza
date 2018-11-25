import Api from '../../utils/api';

import {
  FETCH_FLAVORS,
  FETCH_SIZES,
  FETCH_INCREMENTS,
  SELECT_FLAVOR,
  SELECT_SIZE,
  SELECT_INCREMENTS
} from './actionsTypes';

export const fetchFlavors = () => async dispatch => {
  const payload = await Api.fetchFlavors();
  dispatch({ type: FETCH_FLAVORS, payload });

  return payload;
};

export const fetchSizes = () => async dispatch => {
  const payload = await Api.fetchSizes();
  dispatch({ type: FETCH_SIZES, payload });

  return payload;
};

export const fetchIncrements = () => async dispatch => {
  const payload = await Api.fetchIncrements();
  dispatch({ type: FETCH_INCREMENTS, payload });

  return payload;
};

export const selectFlavor = flavor => dispatch => {
  dispatch({ type: SELECT_FLAVOR, payload: flavor });
};

export const selectSize = size => dispatch => {
  dispatch({ type: SELECT_SIZE, payload: size });
};

export const selectIncrements = increments => dispatch => {
  dispatch({ type: SELECT_INCREMENTS, payload: increments });
};
