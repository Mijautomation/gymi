Feature: Login
  As a user of the app
  I want to be able to login
  So I can use the app

  Scenario: Login with correct credentials
    Given I go to the login page
    When I type "test" into the "username" field
    And I type "test12345" into the "password" field
    And I click the "login" button
    Then I am on the "timeline" page


  Scenario: Login with wrong credentials
    Given I go to the login page
    When I type "milanosie" into the "username" field
    And I type "12345678" into the "password" field
    And I click the "login" button
    Then I see an error notification