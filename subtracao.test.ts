//test suits --> conjunto de testes
//toBeClosedTo --> verifica se o valor é aproximado

import subtracao from './subtracao'

describe('teste de subtracao', () => {
  test('Deve verificar o resultado de uma subtracao', () => {
    expect(subtracao(8, 3)).toBe(5)
  })
  test('Deve verificar o resultado de uma subtracao', () => {
    expect(subtracao(5, 2)).not.toBe(9) // não é 9
  })
})

// test('Deve verificar o resultado de uma soma', () => {
//   expect(soma(3, 8)).toBe(11)
// })
