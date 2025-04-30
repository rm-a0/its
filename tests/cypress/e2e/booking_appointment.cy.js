const CUSTOMER_0 = {
  name: 'Jozko',
  surname: 'Mrkvicka',
  email: 'jozko.mrkvicka@example.com',
  phone: '444500527241',
};

const CUSTOMER_1 = {
  name: 'George',
  surname: 'Floyd',
  email: 'george.floyd@example.com',
  phone: '1234567890',
};

const CUSTOMER_INVALID_0 = {
  name: 'Jozko',
  surname: 'Mrkvicka',
  email: 'invalid-email',
  phone: '444500527241',
};

const CUSTOMER_INVALID_1 = {
  name: 'Jozko',
  surname: 'Mrkvicka',
  email: 'jozko.mrkvicka@example.com',
  phone: 'NaN',
};

function setup() {
  cy.visit('http://localhost:8080');
  cy.wait(1000);
}

function clickNext(index) {
  cy.get(`#button-next-${index}`, { timeout: 5000 }).should('be.visible').click();
}

function clickBack(index) {
  cy.get(`#button-back-${index}`, { timeout: 5000 }).should('be.visible').click();
}

function fillCustomerForm({ name, surname, email, phone}) {
  cy.get('#wizard-frame-3', { timeout: 5000 }).should('be.visible');
  cy.get('#first-name').should('be.visible').clear().type(name);
  cy.get('#last-name').should('be.visible').clear().type(surname);
  cy.get('#email').should('be.visible').clear().type(email);
  cy.get('#phone-number').should('be.visible').clear().type(phone);
}

function checkCustomerData({ name, surname, email, phone}) {
  cy.get('#customer-details .mb-2').contains(`${name} ${surname}`).should('contain.text', `${name} ${surname}`);
  cy.get('#customer-details .mb-2').contains(email).should('contain.text', email);
  cy.get('#customer-details .mb-2').contains(phone).should('contain.text', phone);
}

describe('Booking an Appointment', () => {
  beforeEach(() => {
    setup();
  });

  it('Enters customer information', () => {
    clickNext(2);
    fillCustomerForm(CUSTOMER_0);
    clickNext(3);
    checkCustomerData(CUSTOMER_0);
  });

  it('Adjusts customer information', () => {
    clickNext(2);
    fillCustomerForm(CUSTOMER_0);
    clickNext(3);
    clickBack(4);
    fillCustomerForm(CUSTOMER_1);
    clickNext(3);
    checkCustomerData(CUSTOMER_1);
  });

  it('Handle invalid email entry', () => {
    clickNext(2);
    fillCustomerForm(CUSTOMER_INVALID_0);
    clickNext(3);
    cy.get('#email').should('have.class', 'is-invalid');
  });

  it('Handle invalid phone entry', () => {
    clickNext(2);
    fillCustomerForm(CUSTOMER_INVALID_1);
    clickNext(3);
    cy.get('#phone-number').should('have.class', 'is-invalid');
  });
});