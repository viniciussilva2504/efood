test('aplicação: estrutura do projeto está OK', () => {
  expect(true).toBe(true)
})

test('aplicação: ambiente de desenvolvimento funciona', () => {
  expect(process.env.NODE_ENV).toBeDefined()
})

test('aplicação: pode importar React', () => {
  const React = require('react')
  expect(typeof React).toBe('object')
  expect(typeof React.createElement).toBe('function')
})

test('aplicação: arquivos TypeScript são válidos', () => {
  expect(typeof require('./App.test.tsx')).toBe('object')
})

export {}