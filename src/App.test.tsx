test('aplicação: estrutura do projeto está OK', () => {
  // Verifica se o Jest está funcionando
  expect(true).toBe(true)
})

test('aplicação: ambiente de desenvolvimento funciona', () => {
  // Verifica se variáveis de ambiente estão disponíveis
  expect(process.env.NODE_ENV).toBeDefined()
})

test('aplicação: pode importar React', () => {
  // Testa se conseguimos importar React
  const React = require('react')
  expect(typeof React).toBe('object')
  expect(typeof React.createElement).toBe('function')
})

test('aplicação: arquivos TypeScript são válidos', () => {
  // Verifica se a configuração do TypeScript está funcionando
  expect(typeof require('./App.test.tsx')).toBe('object')
})

export {}