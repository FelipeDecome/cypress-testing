/// <reference types="Cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://mystore.com')
    cy.wait(500)
    cy.get('#ltkpopup-text-btn > .ltkpopup-close').click()
    cy.wait(500)
    cy.get('.signIn-wrapper').click()
    cy.wait(500)
    cy.get('.block-content > .actions-toolbar > div.primary > .action').click()
    cy.wait(500)
    cy.get('#firstname').type('John')
    cy.wait(500)
    cy.get('#lastname').type('Doe')
    cy.wait(500)
    cy.get('#email_address').type('john.doe@domain')
    cy.wait(500)
    cy.get('#password').type('password123@%')
    cy.wait(500)
    cy.get('#password-confirmation').type('password123@%')
  })
})