Feature: Launch Google Application

  @dashboard
  Scenario: Login fine applicaton using valid user credentials
    Given I launch corparation fine Applciation
    Then I should see the login page
    And I enter "mohanso@avadicorp.com" in the "Email Address" field
    And I enter "123456" in the "Password" field
    When I click on "Sign in" button
    # Then  I should see the Dashboard icon
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

    @st
    Scenario: Login fine applicaton using invalid user credentials
      Given I launch corparation fine Applciation
      Then I should see the login page
      And I enter "mohanso@avadicorp.com" in the "Email Address" field
      And I enter "abcdef" in the "Password" field
      When I click on "Sign in" button
      Then I should see "These credentials do not match our records." message

    @st
    Scenario: Login fine applicaton using invalid user credentials
      Given I launch corparation fine Applciation
      Then I should see the login page
      And I enter "test@avadicorp.com" in the "Email Address" field
      And I enter "123456" in the "Password" field
      When I click on "Sign in" button
      Then I should see "These credentials do not match our records." message
