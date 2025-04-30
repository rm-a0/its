const CUSTOMER = {
  name: 'Ferdo',
  surname: 'Mravec',
  email: 'ferdo.mravec@example.com',
  phone: '0123456789',
};

const EDITED_CUSTOMER = {
  name: 'Ferdo',
  surname: 'Mravec',
  email: 'updated.email@example.com',
  phone: '0123456789',
}

function setup() {
  cy.visit('http://localhost:8080');
  cy.wait(1000);
}

function login() {
  cy.get('.backend-link', {timeout: 5000 }).should('be.visible').click();
  cy.get('#username', { timeout: 5000 }).should('be.visible').type('admin');
  cy.get('#password', { timeout: 5000 }).should('be.visible').type('admin123');
  cy.get('#login', { timeout: 5000 }).should('be.visible').click();
}

function fillCustomerData({ name, surname, email, phone}) {
  cy.get('#first-name').should('be.visible').clear().type(name);
  cy.get('#last-name').should('be.visible').clear().type(surname);
  cy.get('#email').should('be.visible').clear().type(email);
  cy.get('#phone-number').should('be.visible').clear().type(phone);
}

function checkCustomerData({ name, surname, email, phone }) {
  cy.get('.customer-row.entry', { timeout: 5000 })
    .first()
    .within(() => {
      cy.get('strong').should('have.text', `${name} ${surname}`);
      cy.get('small.text-muted').should('have.text', `${email}, ${phone}`);
    });
}

function checkDeletedCustomer({ name, surname, email, phone })  {
  cy.get('.customer-row.entry', { timeout: 5000 })
    .first()
    .within(() => {
      cy.get('strong').should('not.contain', `${name} ${surname}`);
      cy.get('small.text-muted').should('not.contain', `${email}, ${phone}`);
    });
}

describe('Managing customers', () => {
  beforeEach(() => {
    setup();
    login();
    cy.get('#calendar-page', { timeout: 5000 }).should('be.visible');
    cy.visit('http://localhost:8080/index.php/customers');
  });

  it('Adds new customer', () => {
    cy.get('#add-customer', { timeout: 5000 }).click();
    fillCustomerData(CUSTOMER);
    cy.get('#save-customer', { timeout: 5000 }).click();
    checkCustomerData(CUSTOMER);
  });

  it('Edits existing customer', () => {
    cy.get('.customer-row.entry', { timeout: 5000 }).first().click();
    cy.get('#edit-customer', { timeout: 5000 }).click();
    fillCustomerData(EDITED_CUSTOMER);
    cy.get('#save-customer', { timeout: 5000 }).click();
    checkCustomerData(EDITED_CUSTOMER);
  });

  it('Deletes existing customer', () => {
    checkCustomerData(EDITED_CUSTOMER);
    cy.get('.customer-row.entry', { timeout: 5000 }).first().click();
    cy.get('#delete-customer', { timeout: 5000 }).click();
    cy.get('.modal-footer .btn-primary', {timeout: 5000 })
      .should('be.visible')
      .click();
    checkDeletedCustomer(EDITED_CUSTOMER);
  });
});