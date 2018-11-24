import { get } from 'lodash';
import configureStore from '../../configs/store';
import { getPizzaFlavors, getPizzaSizes, selectPizzaFlavor } from './actions';

const store = configureStore();

it('check if pizza flavors resolves correctly', async () => {
  const flavors = await store.dispatch(getPizzaFlavors());
  expect(flavors.length).toBeGreaterThanOrEqual(1);

  const firstFlavor = get(flavors, '[0]', {});
  expect(Object.keys(firstFlavor)).toEqual(['id', 'name', 'additionalCookTime']);
});

it('check if pizza sizes resolves correctly', async () => {
  const sizes = await store.dispatch(getPizzaSizes());
  expect(sizes.length).toBeGreaterThanOrEqual(1);

  const firstSize = get(sizes, '[0]', {});
  expect(Object.keys(firstSize)).toEqual(['id', 'name', 'cookTime', 'price']);
});

it('select pizza flavor', async () => {
  const flavors = await store.dispatch(getPizzaFlavors());
  const firstFlavor = get(flavors, '[0]', {});

  store.dispatch(selectPizzaFlavor(firstFlavor));
  expect(store.getState().order.selectPizzaFlavor).toEqual(firstFlavor);
});
