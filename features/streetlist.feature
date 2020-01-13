Feature: Add and View the Street List

    @streetlist
    Scenario: Display street list successfully
        Given I launch corparation fine Applciation
        Then I should see the login page
        And I enter "mohanso@avadicorp.com" in the "Email Address" field
        And I enter "123456" in the "Password" field
        When I click on "Sign in" button
        And I should see the "Welcome S. Mohana" as message
        When I click on "Street List" main menu link
        Then I should see the following menu Options:
            | Add street |
            | View street |
            