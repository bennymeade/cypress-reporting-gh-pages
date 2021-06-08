/// <reference types="cypress" />

context('Aliasing', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/aliasing')
  })

  it('I will pass', () => {
    cy.get('.as-table').find('tbody>tr')
      .first().find('td').first()
      .find('button').as('firstBtn')
  })

  it('I will fail', () => {
    cy.get('.as-Xtable').find('tbody>tr')
      .first().find('td').first()
      .find('button').as('firstXBtn')
  })

  it('I will fail 2', () => {
    cy.get('.as-Xtable').find('tbody>tr')
      .first().find('td').first()
      .find('button').as('firstXBtn')
  })

  it('I will fail 3', () => {
    cy.get('.as-Xtable').find('tbody>tr')
      .first().find('td').first()
      .find('button').as('firstXBtn')
  })
})
