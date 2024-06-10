//test suits --> conjunto de testes
//toBeClosedTo --> verifica se o valor é aproximado

import divisao from './divisao'

describe('teste de divisao', () => {
  test('Deve verificar o resultado de uma divisao', () => {
    expect(divisao(6, 2)).toBe(3)
  })
  test('Deve verificar o resultado de uma divisao', () => {
    expect(divisao(10, 2)).not.toBe(6) // não é 20
  })
})

// test('Deve verificar o resultado de uma soma', () => {
//   expect(soma(3, 8)).toBe(11)
// })
