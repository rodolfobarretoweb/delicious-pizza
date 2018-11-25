describe('Order Test', () => {
  it('select a pizza size', () => {
    cy.visit(Cypress.env('host'));

    cy.get('.list-group li:first-child').click();
    cy.url().should('eq', `${Cypress.env('host')}/order/flavor`);
  });

  it('select a pizza flavor', () => {
    cy.visit(Cypress.env('host'));

    cy.get('.list-group li:first-child').click();
    cy.get('.list-group li:first-child').click();
    cy.url().should('eq', `${Cypress.env('host')}/order/increment`);
  });

  it('add pizza increment', () => {
    cy.visit(Cypress.env('host'));

    cy.get('.list-group li:first-child').click();
    cy.get('.list-group li:first-child').click();
    cy.get('[type="checkbox"]').first().check()
    cy.get('button').click();
    cy.url().should('eq', `${Cypress.env('host')}/order/resume`);
  });

  it('continue without select increment', () => {
    cy.visit(Cypress.env('host'));

    cy.get('.list-group li:first-child').click();
    cy.get('.list-group li:first-child').click();
    cy.get('button').click();
    cy.url().should('eq', `${Cypress.env('host')}/order/resume`);
  });

  it('try access flavor page without select size', () => {
    cy.visit(`${Cypress.env('host')}/order/flavor`);
    cy.url().should('eq', `${Cypress.env('host')}/`);
  });

  it('try access increment page without select flavor', () => {
    cy.visit(Cypress.env('host'));

    cy.get('.list-group li:first-child').click();
    cy.visit(`${Cypress.env('host')}/order/increment`);
    cy.url().should('eq', `${Cypress.env('host')}/`);
  });
});
