import Api from '../../utils/api';

import {
  FETCH_FLAVORS,
  FETCH_SIZES,
  SELECT_FLAVOR,
  SELECT_SIZE,
  SAVE_ORDER,
  FETCH_CURRENT_ORDER
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

export const selectFlavor = flavor => dispatch => {
  dispatch({ type: SELECT_FLAVOR, payload: flavor });
};

export const selectSize = size => dispatch => {
  dispatch({ type: SELECT_SIZE, payload: size });
};

export const saveOrder = () => async (dispatch, getState) => {
  const { order } = getState();
  const payload = { selectedFlavor: order.selectedFlavor, selectedSize: order.selectedSize };

  const response = await Api.saveOrder(payload);
  dispatch({ type: SAVE_ORDER, payload });

  return response;
};

export const fetchOrder = () => async dispatch => {
  const payload = await Api.fetchCurrentOrder();
  dispatch({ type: FETCH_CURRENT_ORDER, payload });

  return payload;
};
