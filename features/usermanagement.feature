Feature: Add and View the User Management

    @usermanagement
    Scenario: Display User Management successfully
        Given I launch corparation fine Applciation
        Then I should see the login page
        And I enter "mohanso@avadicorp.com" in the "Email Address" field
        And I enter "123456" in the "Password" field
        When I click on "Sign in" button
        And I should see the "Welcome S. Mohana" as message
        When I click on "User Management" main menu link
        Then I should see the following menu Options:
            | Create User |
            | View User |