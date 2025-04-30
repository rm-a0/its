# ITS Project 1

- **Author:** Repčík Michal (xrepcim00)
- **Date:** 2025-04-03

## Artifact Coverage Matrix

| Page                              | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |
|-----------------------------------|---|---|---|---|---|---|---|---|---|----|----|----|----|----|
| Appointment Date and Time Page    | x |   | x |   |   |   |   |   |   |    |    |    |    |    |
| Customer Information Page         |   | x | x | x | x | x |   |   |   |    |    |    |    |    |
| Appointment Confirmation Page     |   | x | x | x |   |   |   |   |   |    |    |    |    |    |
| Login Page                        |   |   |   |   |   |   | x |   |   | x  | x  |    |    |    |
| Calendar Management Page          |   |   |   |   |   |   |   |   |   | x  | x  | x  | x  | x  |
| New Appointment Page              |   |   |   |   |   |   |   |   |   | x  |    |    |    |    |
| Edit Appointment Page             |   |   |   |   |   |   |   |   |   |    | x  |    |    |    |
| New Unavailability Page           |   |   |   |   |   |   |   |   |   |    |    |    | x  |    |
| Customer Management Page          |   |   |   |   |   |   | x | x | x |    |    |    |    |    |

## Activity Coverage Matrix

| Activity                                  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |
|-------------------------------------------|---|---|---|---|---|---|---|---|---|----|----|----|----|----|
| Selecting an appointment date and time    | x |   | x |   |   |   |   |   |   | x  |    |    |    |    |
| Entering customer information             |   | x | x | x | x | x |   |   |   | x  | x  |    |    |    |
| Confirming the appointment                |   | x | x | x |   |   |   |   |   |    |    |    |    |    |
| Viewing customers                         |   |   |   |   |   |   | x | x | x |    |    |    |    |    |
| Adding a customer as an admin             |   |   |   |   |   |   | x |   |   |    |    |    |    |    |
| Removing a customer as an admin           |   |   |   |   |   |   |   |   | x |    |    |    |    |    |
| Editing a customer as an admin            |   |   |   |   |   |   |   | x |   |    |    |    |    |    |
| Viewing the calendar                      |   |   |   |   |   |   |   |   |   | x  | x  | x  | x  | x  |
| Canceling a reservation as an admin       |   |   |   |   |   |   |   |   |   |    |    | x  |    |    |
| Editing a reservation as an admin         |   |   |   |   |   |   |   |   |   |    | x  |    |    |    |
| Creating an unavailability as an admin    |   |   |   |   |   |   |   |   |   |    |    |    | x  |    |
| Canceling an unavailability as an admin   |   |   |   |   |   |   |   |   |   |    |    |    |    | x  |

## Feature-Test Matrix

| Feature File                      | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |
|-----------------------------------|---|---|---|---|---|---|---|---|---|----|----|----|----|----|
| booking_appointment.feature       | x | x | x | x | x | x |   |   |   |    |    |    |    |    |
| manage_customers.feature          |   |   |   |   |   |   | x | x | x |    |    |    |    |    |
| manage_reservations.feature       |   |   |   |   |   |   |   |   |   | x  | x  | x  | x  | x  |