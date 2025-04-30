Feature: Managing reservations
  As an admin
  I want to add, edit and delete reservations and unavailabilities
  So that I can manage reservations and unavailabilities

# Matrix col. 10
Scenario: Add a new reservation
  Given I am on the Login page
  And I log in with admin credentials
  And I the page contains Calendar
  When I click "+" button
  And I click Appointment from the dropdown menu
  And I enter "Janko" into the name field
  And I enter "Hrasko" into the surname field
  And I enter "jano.hrasko@example.com" into email field
  And I enter "123456789" into phone field
  And I save the reservation
  Then I see reservation for "Janko Hrasko" in calendar

# Matrix col. 11
Scenario: Edit a reservation
  Given I am logged in as an admin
  And I am on the Calendar Management page
  And a customer "Janko Hrasko" has a reservation
  When I click on the reservation
  And I click Edit button
  And I change name to "Adam"
  And I click Save
  Then I see reservation for "Adam Hrasko" in calendar

# Matrix col. 12
Scenario: Delete a reservation
  Given I am logged in as an admin
  And I am on the Calendar Management page
  And a customer "Janko Hrasko" has a reservation
  When I click on the reservation
  And I click Delete button
  And I click Delete on the Delete apponitment pop-up
  Then I no longer see a reservation for a customer "Janko Hrasko"

# Matrix col. 13
Scenario: Add a new unavailability
  Given I am logged in as an admin
  And I am on the Calendar Management page
  When I click "+" button
  And I click "Unavailability" from the dropdown menu
  And I enter "Janko" into the name field
  And I select "Jane Doe" as provider
  And I save the unavailability
  Then I see unavailability for in calendar


# Matrix col. 14
Scenario: Delete an unavailability 
  Given I am logged in as an admin
  And I am on the Calendar Management page
  And an unavailability exists
  When I click on the unavailability 
  And I click Delete button
  Then I no longer see the unavailability