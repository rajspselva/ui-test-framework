Feature: Verify Fine Report Operations

  @finereport
  Scenario: Display Fine Report successfully
    Given I launch corparation fine Applciation
    Then I should see the login page
    And I enter "mohanso@avadicorp.com" in the "Email Address" field
    And I enter "123456" in the "Password" field
    When I click on "Sign in" button
    And I should see the "Welcome S. Mohana" as message
    When I click on "Fine Report" link
    Then I should see "Report" as page title
    And I should see "Fine Report" as submenu title
    And I should see "Search Bill Number/Name/Mobile Number..." placeholder field
    And I should see "From Date" label field
    And I should see "from date" placeholder field
    And I should see "To Date" label field
    And I should see "to date" placeholder field
    And I should see "Division" label field
    And I should see "Ward Number" label field
    And I should see "Report List" with below values:
      | S.No  | Bill Number | Date       | Name           | Mobile Number | Ward    | Fine Amount   | Action  |
      | 1     | 20191250001 | 24-12-2019 | Venu           | 8428415000    | 19      | 10000         |         |
      | 2     | 20191210019 | 23-12-2019 | dgdhdydy       | 6853533353    | 7       | 3258353       |         |
      | 3     | 20191210018 | 03-12-2019 | gggh           | 6663333366    | 15      | 656           |         |
      | 4     | 20191210017 | 02-12-2019 | kshsb4hdñ      | 9454664446    | 15      | 64            |         |
      | 5     | 20191210016 | 02-12-2019 | jssh           | 9456442494    | 15      | 64            |         |
      | 6     | 20191210015 | 02-12-2019 | hsuiai         | 9424346491    | 15      | 6             |         |
      | 7     | 20191210014 | 02-12-2019 | ajajj          | 9454646461    | 15      | 6161          |         |
      | 8     | 20191210013 | 02-12-2019 | !*._?*!"!      | 9464664149    | 26      | 300           |         |
      | 9     | 20191210012 | 02-12-2019 | yyhhhuu        | 3369999663    | 15      | 999999999     |         |
      | 10    | 20191210011 | 02-12-2019 | Doris          | 8760073864    | 3       | 10000         |         |
    When I click on page no "2" link
    Then I should see "Report List" with below values:
      | S.No  | Bill Number | Date       | Name           | Mobile Number | Ward    | Fine Amount   | Action  |
      | 1     | 20191210010 | 02-12-2019 | vinoth         | 9786065641    | 15      | 500           |         |
      | 2     | 20191210009 | 02-12-2019 | yehhyeyeur     | 6656566565    | 15      | 1234567890    |         |
      | 3     | 20191210008 | 02-12-2019 | Venu           | 8428415000    | 15      | 12            |         |
      | 4     | 20191210007 | 02-12-2019 | yydhfh         | 6686895659    | 15      | 1234567890    |         |
      | 5     | 20191210006 | 02-12-2019 | hdhrhd         | 6566565656    | 15      | 1234567890    |         |
      | 6     | 20191210005 | 02-12-2019 | fndnfn         | 9464946641    | 15      | 6             |         |
      | 7     | 20191210004 | 02-12-2019 | nssjsjshsh     | 9494646449    | 15      | 1             |         |
      | 8     | 20191210003 | 02-12-2019 | hshsdh         | 9784846646    | 15      | 69            |         |
      | 9     | 20191210002 | 02-12-2019 | bndn           | 9559464614    | 15      | 930           |         |
      | 10    | 201912370001| 02-12-2019 | ggh            | 9566589655    | 15      | 835           |         |
