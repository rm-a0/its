const CUSTOMER = {
  name: 'Janko',
  surname: 'Hrasko',
  email: 'jano.hrasko@example.com',
  phone: '123456789',
};

const EDITED_CUSTOMER = {
  name: 'Adam',
  surname: 'Hrasko',
  email: 'jano.hrasko@example.com',
  phone: '123456789',
};

function setup() {
  cy.visit('http://localhost:8080');
  cy.wait(1000);
}

function login() {
  cy.get('a.backend-link').click();
  cy.get('#username', { timeout: 5000 }).should('be.visible').type('admin');
  cy.get('#password', { timeout: 5000 }).should('be.visible').type('admin123');
  cy.get('#login', { timeout: 5000 }).should('be.visible').click();
}

function fillCustomerData({ name, surname, email, phone}) {
  cy.get('#first-name', { timeout: 5000 }).clear().type(name);
  cy.get('#last-name', { timeout: 5000 }).clear().type(surname);
  cy.get('#email', { timeout: 5000 }).clear().type(email);
  cy.get('#phone-number', { timeout: 5000 }).clear().type(phone);
}

function checkAppointment({ name, surname, email, phone}) {
  const expectedTitle = `Room 42 - ${name} ${surname}`;
  cy.get('.fc', { timeout: 5000 })
    .should('exist')
    .scrollIntoView();

  cy.get('.fc-event-main', { timeout: 5000 })
    .should('exist')
    .filter((index, element) => {
      const eventTitle = Cypress.$(element).find('.fc-event-title').text().trim();
      return eventTitle === expectedTitle;
    })
    .within(() => {
      cy.get('.fc-event-title').should('contain.text', expectedTitle);
    });
}

function checkUnavailability() {
  cy.get('.fc', { timeout: 5000 })
    .should('exist')
    .scrollIntoView();

  cy.get('.fc-event-main', { timeout: 5000 })
    .should('exist')
    .filter((index, element) => {
      const eventTitle = Cypress.$(element).find('.fc-event-title').text().trim();
      return eventTitle === 'Unavailability';
    })
    .first()
    .within(() => {
      cy.get('.fc-event-title').should('contain.text', 'Unavailability');
    });
}

function clickAppointment({ name, surname, email, phone }) {
  const expectedTitle = `Room 42 - ${name} ${surname}`;
  cy.get('.fc', { timeout: 5000 })
    .should('exist')
    .scrollIntoView();
  cy.get('.fc-event-main', { timeout: 5000 })
    .should('exist')
    .filter((index, element) => {
      const eventTitle = Cypress.$(element).find('.fc-event-title').text().trim();
      return eventTitle === expectedTitle;
    })
    .should('have.length', 1)
    .then(($event) => {
      cy.wrap($event)
        .invoke('css', 'display', 'block')
        .invoke('css', 'visibility', 'visible')
        .scrollIntoView()
        .click({ force: true });
    })
}

function checkDeletedAppointment() {
  cy.get('.fc', { timeout: 5000 })
    .should('exist')
    .scrollIntoView();

  cy.get('.fc-event-main', { timeout: 5000 })
    .should('not.exist');
}

function clickUnavailability() {
  cy.get('.fc', { timeout: 5000 })
    .should('exist')
    .scrollIntoView();
  cy.get('.fc-event-main', { timeout: 5000 })
    .should('exist')
    .filter((index, element) => {
      const eventTitle = Cypress.$(element).find('.fc-event-title').text().trim();
      return eventTitle === 'Unavailability';
    })
    .should('have.length', 1)
    .then(($event) => {
      cy.wrap($event)
        .invoke('css', 'display', 'block')
        .invoke('css', 'visibility', 'visible')
        .scrollIntoView()
        .click({ force: true });
    })
}

describe('Managing reservations', () => {
  beforeEach(() => {
    setup();
    login();
  });

  it('Adds new reservation', () => {
    cy.get('.dropdown.d-sm-inline-block button.btn.btn-light', { timeout: 5000 }).click();
    cy.get('#insert-appointment', { timeout: 5000 }).click();
    fillCustomerData(CUSTOMER);
    cy.get('#save-appointment').click();
    cy.wait(1000);
    checkAppointment(CUSTOMER);
  });

  it('Edits existing reservation', () => {
    clickAppointment(CUSTOMER);
    cy.get('button.edit-popover').click();
    cy.get('#first-name', { timeout: 5000 }).clear().type('Adam');
    cy.get('#save-appointment').click();
    cy.wait(1000);
    checkAppointment(EDITED_CUSTOMER);
  });

  it('Deletes existing reservation', () => {
    clickAppointment(EDITED_CUSTOMER);
    cy.get('button.delete-popover').click();
    cy.get('#message-modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary', { timeout: 5000}).click();
    cy.wait(1000);
    checkDeletedAppointment();
  });

  it('Adds new unavailability', () => {
    checkDeletedAppointment();
    cy.get('.dropdown.d-sm-inline-block button.btn.btn-light', { timeout: 5000 }).click();
    cy.get('#insert-unavailability', { timeout: 5000 }).click();
    cy.get('#unavailability-provider', { timeout: 5000 }).select('Jane Doe');
    cy.get('#save-unavailability', { timeout: 5000 }).click();
    cy.wait(1000);
    checkUnavailability();
  });

  it('Deletes existing unavailability', () => {
    clickUnavailability();
    cy.get('button.delete-popover').click();
    cy.wait(1000);
    checkDeletedAppointment();
  });
});