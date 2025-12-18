Feature: Landing on Homepage
    As a user I should be able to land on the carwale Homepage

  Scenario:
    Given the user is on Homepage
    When user hovers on the New Cars option
    And clicks on the Find New Cars option
    Then they are directed to the New Cars page
