import Api from '../api';

it('check save order response', async () => {
  const data = {
    selectedSize: {
      id: 0,
      name: 'Pequena',
      cookTime: 15,
      price: 20
    }
  };

  const response = await Api.saveOrder(data);
  expect(response).toEqual(data);
});
