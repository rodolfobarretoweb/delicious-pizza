import { get } from 'lodash';
import configureStore from '../../configs/store';

import {
  fetchFlavors, fetchSizes, selectFlavor, selectSize, fetchIncrements, selectIncrements
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

it('check if pizza increments resolves correctly', async () => {
  const increments = await store.dispatch(fetchIncrements());
  expect(increments.length).toBeGreaterThanOrEqual(1);

  const firstIncrement = get(increments, '[0]', {});
  expect(Object.keys(firstIncrement)).toEqual(['id', 'name', 'additionalPrice', 'additionalCookTime']);
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

it('select pizza increment', async () => {
  const increments = await store.dispatch(fetchIncrements());
  const firstIncrement = get(increments, '[0]', {});

  store.dispatch(selectIncrements(firstIncrement));
  expect(store.getState().order.selectedIncrements).toEqual(firstIncrement);
});
