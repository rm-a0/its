# Test Report
- **Author:** Michal Repčík (xrepcim00)
- **Date:** 30.4.2025
- **Context:** This report contains updates and results of the automated tests for the ITS Project.

# Updates and Changes
- **All tests**
    - Clear input fields before typing (`clear().type()` instead of just `.type()`). This improves modularity and reusability across tests and handles both initial input and updates.
- **Booking Appointment**
    - Skip tests for date and time changes.
- **Managing Customers**
    - Added phone number input to scenarios, not just name/email.
    - Check all fields (name, email, phone) after changes, using a reusable function for consistency.
- **Managing Reservations**
    - Unavailability creation skips "Janko" input.
    - Deletion test now targets "Adam Hrasko" (edited name), not "Janko Hrasko."

# Test Results
Ran 12 tests across 3 specs (`booking_appointment.cy.js`, `manage_customers.cy.js`, `manage_reservations.cy.js`). 
Platform                     | Status              | Duration
-----------------------------|---------------------|---------
Windows (WSL2 Ubuntu, X11)   | All 12 tests passed | 1m 5s
Debian                       | All 12 tests passed | 50s

# BDD Scenario to Source Code Mapping
Scenario File                     | Line | Cypress File                   | Line
----------------------------------|------|--------------------------------|------
booking_appointment.feature       | 15   | booking_appointment.cy.js      | 61
booking_appointment.feature       | 37   | booking_appointment.cy.js      | 68
booking_appointment.feature       | 48   | booking_appointment.cy.js      | 78
booking_appointment.feature       | 59   | booking_appointment.cy.js      | 85
manage_customers.feature          | 8    | manage_customers.cy.js         | 59
manage_customers.feature          | 16   | manage_customers.cy.js         | 66
manage_customers.feature          | 24   | manage_customers.cy.js         | 74
manage_reservations.feature       | 8    | manage_reservation.cy.js       | 123
manage_reservations.feature       | 22   | manage_reservation.cy.js       | 132
manage_reservations.feature       | 33   | manage_reservation.cy.js       | 141
manage_reservations.feature       | 43   | manage_reservation.cy.js       | 149
manage_reservations.feature       | 55   | manage_reservation.cy.js       | 159