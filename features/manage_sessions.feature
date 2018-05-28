Feature: Add gym session
  As an end-user using this app
  I want to add gym sessions to my list of sessions
  So that I can keep track of my gym progress

  Scenario: Sunday isn't Friday
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "Nope"