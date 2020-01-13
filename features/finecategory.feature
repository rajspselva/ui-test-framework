Feature: Add and View the Fine Category 

    @finecategory
    Scenario: Display Fine Category successfully
        Given I launch corparation fine Applciation
        Then I should see the login page
        And I enter "mohanso@avadicorp.com" in the "Email Address" field
        And I enter "123456" in the "Password" field
        When I click on "Sign in" button
        And I should see the "Welcome S. Mohana" as message
        When I click on "Fine Category" main menu link
        Then I should see the following menu Options:
            | Add Fine Category |
            | View Fine Category |