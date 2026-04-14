Feature: Login

  Scenario Outline: Login validation

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see <result>

    Examples:
      | username        | password     | result                                                                    |
      | standard_user   | secret_sauce | Products                                                                  |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
      | invalid_user    | wrong_pass   | Epic sadface: Username and password do not match any user in this service |
      |                 | secret_sauce | Epic sadface: Username is required                                        |
      | standard_user   |              | Epic sadface: Password is required                                        |