//test suits --> conjunto de testes
//toBeClosedTo --> verifica se o valor é aproximado

import multiplicacao from './multiplicacao'

describe('teste de multiplicacao', () => {
  test('Deve verificar o resultado de uma multiplicacao', () => {
    expect(multiplicacao(2, 5)).toBe(10)
  })
  test('Deve verificar o resultado de uma multiplicacao', () => {
    expect(multiplicacao(5, 5)).not.toBe(20) // não é 20
  })
})

// test('Deve verificar o resultado de uma soma', () => {
//   expect(soma(3, 8)).toBe(11)
// })
