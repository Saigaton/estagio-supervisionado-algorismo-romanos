function converter(n) {
  if (n === 0) return '';
  if (n < 0 || n > 1000) return;

  const tabela = [
    { valor: 1000, simbolo: 'M' },
    { valor: 900, simbolo: 'CM' },
    { valor: 500, simbolo: 'D' },
    { valor: 400, simbolo: 'CD' },
    { valor: 100, simbolo: 'C' },
    { valor: 90, simbolo: 'XC' },
    { valor: 50, simbolo: 'L' },
    { valor: 40, simbolo: 'XL' },
    { valor: 10, simbolo: 'X' },
    { valor: 9, simbolo: 'IX' },
    { valor: 5, simbolo: 'V' },
    { valor: 4, simbolo: 'IV' },
    { valor: 1, simbolo: 'I' },
  ];

  let resultado = '';
  for (const item of tabela) {
    while (n >= item.valor) {
      resultado += item.simbolo;
      n -= item.valor;
    }
  }
  return resultado;
}

module.exports = converter;