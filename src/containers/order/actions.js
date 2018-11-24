import Api from '../../utils/api';
import { FETCH_PIZZA_FLAVORS, FETCH_PIZZA_SIZES, SELECT_PIZZA_FLAVOR } from './actionsTypes';

export const getPizzaFlavors = () => async dispatch => {
  const payload = await Api.fetchPizzaFlavors();
  dispatch({ type: FETCH_PIZZA_FLAVORS, payload });

  return payload;
};

export const getPizzaSizes = () => async dispatch => {
  const payload = await Api.fetchPizzaSizes();
  dispatch({ type: FETCH_PIZZA_SIZES, payload });

  return payload;
};

export const selectPizzaFlavor = flavor => dispatch => {
  dispatch({ type: SELECT_PIZZA_FLAVOR, payload: flavor });
};
