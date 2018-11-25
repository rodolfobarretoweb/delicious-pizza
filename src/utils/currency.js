export function formatCurrency({ value, countryCode = 'pt-br', currency = 'BRL' }) {
  return new Intl.NumberFormat(countryCode, {
    currency,
    style: 'currency',
    minimumFractionDigits: 2
  }).format(value);
}
