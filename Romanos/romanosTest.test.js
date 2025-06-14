const converter = require('./romanos');

test('converte 1 para I', () => {
  expect(converter(1)).toBe('I');
});

test('converte 2 para II', () => {
  expect(converter(2)).toBe('II');
});

test('converte 3 para III', () => {
  expect(converter(3)).toBe('III');
});

test('converte 4 para IV', () => {
  expect(converter(4)).toBe('IV');
});

test('converte 5 para V', () => {
  expect(converter(5)).toBe('V');
});

test('converte 9 para IX', () => {
  expect(converter(9)).toBe('IX');
});

test('converte 21 para XXI', () => {
  expect(converter(21)).toBe('XXI');
});

test('converte 50 para L', () => {
  expect(converter(50)).toBe('L');
});

test('converte 100 para C', () => {
  expect(converter(100)).toBe('C');
});

test('converte 500 para D', () => {
  expect(converter(500)).toBe('D');
});

test('converte 1000 para M', () => {
  expect(converter(1000)).toBe('M');
});

test('converte 399 para CCCXCIX', () => {
  expect(converter(399)).toBe('CCCXCIX');
});

test('converte 0 para ""', () => {
  expect(converter(0)).toBe('');
});

test('retorna undefined para número negativo', () => {
  expect(converter(-1)).toBeUndefined();
});

test('retorna undefined para número maior que 1000', () => {
  expect(converter(1001)).toBeUndefined();
});