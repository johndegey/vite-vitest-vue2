/// <reference types="cypress" />

describe('HelloWorld', () => {
  it('displays default page', () => {
    cy.visit('/');
    cy.get('h1.green')
      .should('have.text',
        ' You did it! ',
      );
  });
});
