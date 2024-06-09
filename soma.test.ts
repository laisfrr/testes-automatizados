//test suits --> conjunto de testes

import soma from './soma'

describe('teste de soma', () => {
  test('Deve verificar o resultado de uma soma', () => {
    expect(soma(3, 8)).toBe(11)
  })
  test('Deve verificar o resultado de uma soma', () => {
    expect(soma(3, 5)).not.toBe(9) // não é 9
  })
})

// test('Deve verificar o resultado de uma soma', () => {
//   expect(soma(3, 8)).toBe(11)
// })
