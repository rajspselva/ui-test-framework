Feature: Add and View the Department

    @department
    Scenario: Display Department padsuccessfully
        Given I launch corparation fine Applciation
        Then I should see the login page
        And I enter "mohanso@avadicorp.com" in the "Email Address" field
        And I enter "123456" in the "Password" field
        When I click on "Sign in" button
        And I should see the "Welcome S. Mohana" as message
        When I click on "Department" main menu link
        Then I should see the following menu Options:
            | Add Department |
            | View Department |
        # Then I click on "Add Department" link
        # Then I should see the "Create Department" as a page titile
        # And I should see the "Department Name" label field
        # And I should see the "Enter Department Name" 
        # And I click on "submit"  button
        # And I click on "cancle" button

        # Then I should see "Report" as page title
        # And I should see "Fine Report" as submenu title
        # And I should see "Search Bill Number/Name/Mobile Number..." placeholder field
        # And I should see "From Date" label field
        # And I should see "from date" placeholder field
        # And I should see "To Date" label field
        # And I should see "to date" placeholder field
        # And I should see "Division" label field
        # And I should see "Ward Number" label field
        # And I should see "Report List" with below values:
        #   
        # When I click on page no "2" link
        # Then I should see "Report List" with below values:
        #     | S.No | Bill Number  | Date       | Name       | Mobile Number | Ward | Fine Amount | Action |
        #     | 1    | 20191210010  | 02-12-2019 | vinoth     | 9786065641    | 15   | 500         |        |
        #     | 2    | 20191210009  | 02-12-2019 | yehhyeyeur | 6656566565    | 15   | 1234567890  |        |
        #     | 3    | 20191210008  | 02-12-2019 | Venu       | 8428415000    | 15   | 12          |        |
        #     | 4    | 20191210007  | 02-12-2019 | yydhfh     | 6686895659    | 15   | 1234567890  |        |
        #     | 5    | 20191210006  | 02-12-2019 | hdhrhd     | 6566565656    | 15   | 1234567890  |        |
        #     | 6    | 20191210005  | 02-12-2019 | fndnfn     | 9464946641    | 15   | 6           |        |
        #     | 7    | 20191210004  | 02-12-2019 | nssjsjshsh | 9494646449    | 15   | 1           |        |
        #     | 8    | 20191210003  | 02-12-2019 | hshsdh     | 9784846646    | 15   | 69          |        |
        #     | 9    | 20191210002  | 02-12-2019 | bndn       | 9559464614    | 15   | 930         |        |
        #     | 10   | 201912370001 | 02-12-2019 | ggh        | 9566589655    | 15   | 835         |        |
