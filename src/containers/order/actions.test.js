import { get } from 'lodash';
import configureStore from '../../configs/store';

import {
  fetchFlavors, fetchSizes, selectFlavor, selectSize, saveOrder, fetchOrder
} from './actions';

const store = configureStore();

it('check if pizza flavors resolves correctly', async () => {
  const flavors = await store.dispatch(fetchFlavors());
  expect(flavors.length).toBeGreaterThanOrEqual(1);

  const firstFlavor = get(flavors, '[0]', {});
  expect(Object.keys(firstFlavor)).toEqual(['id', 'name', 'additionalCookTime']);
});

it('check if pizza sizes resolves correctly', async () => {
  const sizes = await store.dispatch(fetchSizes());
  expect(sizes.length).toBeGreaterThanOrEqual(1);

  const firstSize = get(sizes, '[0]', {});
  expect(Object.keys(firstSize)).toEqual(['id', 'name', 'cookTime', 'price']);
});

it('select pizza flavor', async () => {
  const flavors = await store.dispatch(fetchFlavors());
  const firstFlavor = get(flavors, '[0]', {});

  store.dispatch(selectFlavor(firstFlavor));
  expect(store.getState().order.selectedFlavor).toEqual(firstFlavor);
});

it('select pizza size', async () => {
  const sizes = await store.dispatch(fetchSizes());
  const firstSize = get(sizes, '[0]', {});

  store.dispatch(selectSize(firstSize));
  expect(store.getState().order.selectedSize).toEqual(firstSize);
});

it('check if save order running correctly', async () => {
  const response = await store.dispatch(saveOrder());
  const { order } = store.getState();

  expect(response).toMatchObject(order.currentOrder);
});

it('get current order data', async () => {
  const response = await store.dispatch(fetchOrder());
  const { order } = store.getState();

  expect(response).toMatchObject({
    selectedFlavor: order.selectedFlavor, selectedSize: order.selectedSize
  });
});
