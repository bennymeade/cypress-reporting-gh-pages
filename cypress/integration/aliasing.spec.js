/// <reference types="cypress" />

context('Aliasing', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/aliasing')
  })

  it('passing test', () => {
    cy.get('.as-table').find('tbody>tr')
      .first().find('td').first()
      .find('button').as('firstBtn')
  })

  it('failing test', () => {
    cy.get('.as-Xtable').find('tbody>tr')
      .first().find('td').first()
      .find('button').as('firstXBtn')
  })
})
