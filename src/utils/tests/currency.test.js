import { formatCurrency } from '../currency';

it('check format currency default response', () => {
  expect(formatCurrency({ value: 20 })).toEqual('R$ 20.00');
});
