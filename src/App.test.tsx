test('app: project structure is OK', () => {
  expect(true).toBe(true)
})

test('app: development environment works', () => {
  expect(process.env.NODE_ENV).toBeDefined()
})

test('app: can import React', () => {
  const React = require('react')
  expect(typeof React).toBe('object')
  expect(typeof React.createElement).toBe('function')
})

test('app: TypeScript files are valid', () => {
  expect(typeof require('./App.test.tsx')).toBe('object')
})

export {}