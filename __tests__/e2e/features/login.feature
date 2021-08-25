Feature: testing Login screen

  Scenario: validate welcome screen
    Given I should have app welcome screen

  Scenario: validate a successful login
    Given I login with valid username & password

  Scenario: validate a failed login with invalid username
    Given I login using an invalid username

  Scenario: validate a failed login with invalid password
    Given I login using an invalid password

  Scenario: validate a failed login with empty password
    Given I login using an empty password

  Scenario: validate a failed login with empty username
    Given I login using an empty username

  Scenario: validate a failed login with empty credentials
    Given I login using an empty credentials