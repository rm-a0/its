Feature: Managing customers
  As an admin
  I want to add, edit and delete customers
  So that I can manage user accounts

# Matrix col. 7
Scenario: Add a new customer
  Given I am on the Login page
  And I log in with admin credentials
  And I navigate to the Customer Management page
  When I add a new customer with name "Ferdo Mravec" and email "ferdo.mravec@example.com"
  Then I see "Ferdo Mravec" in the customer list

# Matrix col. 8
Scenario: Edit an existing customer
  Given I am logged in as an admin
  And I am on the Customer Management page
  And a customer "Ferdo Mravec" with email "ferdo.mravec@example.com" exists
  When I edit the customer’s email to "updated.email@example.com"
  Then I see the updated email "updated.email@example.com" in the customer list

# Matrix col. 9
Scenario: Delete a customer
  Given I am logged in as an admin
  And I am on the customer management page
  And a customer "Ferdo Mravec" exists
  When I delete the customer "Ferdo Mravec"
  Then I no longer see "Ferdo Mravec" in the customer list
