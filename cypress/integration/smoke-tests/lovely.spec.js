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
  })
  