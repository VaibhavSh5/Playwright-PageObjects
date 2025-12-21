@regression

Feature: Navigation to the New cars page on carwale
         As a user I should be able to navigate to new cars page and select different
         cars page

    Background:
        Given the user is on the cars Homepage
        When the user hover on the New cars

    Scenario Outline:
        When user click on the Find New Cars link
        Then user is redirected to the New Cars page
        Then user clicks on the "<Car Brand>" link
        Then user is redirected to the "<Car Model>" page

    Examples:
        | Car Brand | Car Model |
        | BMW       | BMW Cars  |
        | Tata      | Tata Cars |
        | Skoda     | Skoda Cars|
        | Hyundai   | Hyundai Cars|