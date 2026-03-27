// Teste E2E básico do fluxo principal do efood

describe('Fluxo principal do efood', () => {
  it('Deve acessar a home, visualizar restaurantes e navegar para um cardápio', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Restaurantes').should('exist')
    cy.get('table').should('exist')
    // Clica no primeiro restaurante (ajuste o seletor conforme necessário)
    cy.get('button').contains('Adicionar Item').first().click({ force: true })
    cy.contains('Cardápio').should('exist')
  })
})
