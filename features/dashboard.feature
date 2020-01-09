Feature: Verify Dashboard

    Scenario: Display dashboard for successful login
        Given I launch corparation fine Applciation
        Then I should see the login page
        And I enter "mohanso@avadicorp.com" in the "Email Address" field
        And I enter "123456" in the "Password" field
        When I click on "Sign in" button
        Then I should see "Smart Survey" title
        And I should see "Today Fine Amount" as card title and the amount as "0.00"
        And I should see "Weekly Fine Amount" as card title and the amount as "0.00"
        And I should see "Monthly Fine Amount" as card title and the amount as "0.00"
        And I should see "Yearly Fine Amount" as card title and the amount as "0.00"
        #And I should see "Ward Based Fine Report" as card title
        #And I should see "Category Based Fine Report" as card title
        #And I should see "Division Based Fine Report" as card title
        #And I should see "Fine Collection" as card title
        And I should see the the following list of user list with fine amount:
            | S | S. MOHANA    | Sanitary Officer    | 4708421002 |
            | A | ABDUL JAFFAR | Sanitary Inspector  | 8532       |
            | A | A.NAGARAJ    | Sanitary Inspector  | 0          |
            | R | RAVICHANDRAN | Sanitary Inspector  | 0          |
            | G | G.PRAKASH    | Sanitary Inspector  | 10000      |
            | S | S.PARAKASH   | Sanitary Inspector  | 0          |
            | S | S.SIVAKUMAR  | Sanitary Inspector  | 0          |
            | S | SIVAKUMAR    | Sanitary Supervisor | 0          |
            | P | POUL         | Sanitary Supervisor | 0          |
