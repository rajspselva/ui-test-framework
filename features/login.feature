Feature: Login Fine Application
  @st
  Scenario: Login fine applicaton using valid user credentials
    Given I launch corparation fine Applciation
    Then I should see the login page
    And I enter "mohanso@avadicorp.com" in the "Email Address" field
    And I enter "123456" in the "Password" field
    When I click on "Sign in" button

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