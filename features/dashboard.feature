Feature: Verify Dashboard

    @dashboard
    Scenario: Display dashboard for successful login
        Given I launch corparation fine Applciation
        Then I should see the login page
        And I enter "mohanso@avadicorp.com" in the "Email Address" field
        And I enter "123456" in the "Password" field
        When I click on "Sign in" button
        And I should see the "Welcome S. Mohana" as message
        And I should see the following menu option on the left had side:
          | Dashboard         |
          | Fine Report       |
          | Department        |
          | Division/Ward     |
          | Street List       |
          | Fine Category     |
          | User Role         |
          | User Management   |
          | Time Config       |
        When I click on "Welcome S. Mohana" message
        Then I should see dropdown menu with below options:
          | S. MOHANA             |
          | mohanso@avadicorp.com |
          | Change password       |
          | Logout                |
        When I click on "Welcome S. Mohana" message again
        Then I should see dropdown menu is closed
        And I should see "Smart Survey" title
        And I should see the following list of cards with fine amount and report links:
          | Today Fine Amount     | 0.00                | View Report |
          | Weekly Fine Amount    | 0.00                | View Report |
          | Monthly Fine Amount   | 32,68,353.00        | View Report |
          | Yearly Fine Amount    | 4,72,22,53,416.00   | View Report |
