import { get } from 'lodash';
import configureStore from '../../configs/store';

import {
  fetchFlavors,
  fetchSizes,
  selectFlavor,
  selectSize,
  fetchIncrements,
  selectIncrements,
  getTotalPrice,
  getTotalTime
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

describe('check total time and price response', () => {
  const data = {
    size: {
      id: 0,
      name: 'Pequena',
      cookTime: 15,
      price: 20
    },

    flavor: {
      id: 0,
      name: 'Calabresa',
      additionalCookTime: 0
    },

    increments: [
      {
        id: 0,
        name: 'Extra bacon',
        additionalPrice: 3,
        additionalCookTime: 0
      }
    ]
  };

  it('with valid values', () => {
    expect(getTotalPrice(data.size, data.increments)).toBe(23);
    expect(getTotalTime(data.size, data.flavor, data.increments)).toBe(15);
  });

  it('with undefined values', () => {
    data.size.price = undefined;
    data.size.cookTime = undefined;
    data.flavor.additionalCookTime = undefined;
    data.increments[0].additionalPrice = undefined;
    data.increments[0].additionalCookTime = undefined;

    expect(getTotalPrice(data.size, data.increments)).toBe(0);
    expect(getTotalTime(data.size, data.flavor, data.increments)).toBe(0);
  });
});
