@smoke

Feature: Landing on Homepage
    As a user I should be able to land on the carwale Homepage

  Background:
    Given the user is on Homepage

  Scenario:
    When user hovers on the New Cars option and clicks on Find New Cars
    Then they are directed to the New Cars page
