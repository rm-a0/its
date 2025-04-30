Feature: Booking an Appointment
  As an unregistered user
  I want to book an appointment
  So that I can reserve a service without creating an account

# Matrix col. 1
Scenario: Set time and date of an appointment
  Given I am on the Appointment Date and Time page
  And the page displays a calendar with selectable days and times
  When I select a day and time from the calendar
  Then the selected day and time are shown as my appointment choice

# Matrix col. 2
Scenario: Enter customer information
  Given I am on the Customer Information page after selecting a date and time
  And the page displays a form for entering customer details
  When I enter my name as "Jozko"
  And I enter my surname as "Mrkvicka"
  And I enter my email as "jozko.mrkvicka@example.com"
  And I enter my phone number as "444500527241"
  And I click Next
  Then the Appointment Confirmation page displays my entered customer details

# Matrix col. 3
Scenario: Adjust date and time
  Given I am on the Appointment Confirmation page with a selected date and time
  When I click Back to the Customer Information page
  And I click Back to the Appointment Date and Time page
  And I select a different day and time from the calendar
  And I click Next
  And I click Next on the Customer Information page
  And I confirm my appointment
  Then the Booking Confirmation page shows the new day and time

# Matrix col. 4
Scenario: Adjust customer information after navigating back once
  Given I am on the Appointment Confirmation page with entered customer details
  When I click Back to the Customer Information page
  And I change my name to "George"
  And I change my surname to "Floyd"
  And I change my email to "george.floyd@example.com"
  And I change my phone number to "1234567890"
  And I click Next
  Then the Appointment Confirmation page displays my updated customer details

# Matrix col. 5
Scenario: Handle invalid email entry
  Given I am on the Customer Information page after selecting a date and time
  And the page displays a form for entering customer details
  When I enter my name as "Jozko"
  And I enter my surname as "Mrkvicka"
  And I enter my email as "invalid-email"
  And I enter my phone number as "444500527241"
  And I click Next
  Then I see an error message indicating an invalid email

# Matrix col. 6
Scenario: Handle invalid phone entry
  Given I am on the Customer Information page after selecting a date and time
  And the page displays a form for entering customer details
  When I enter my name as "Jozko"
  And I enter my surname as "Mrkvicka"
  And I enter my email as "jozko.mrkvicka@example.com"
  And I enter my phone number as "NaN"
  And I click Next
  Then I see an error message indicating an invalid email