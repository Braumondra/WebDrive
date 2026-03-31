Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password     | message                        |
      | standard_user2 | secret_sauc6e | Epic sadface: Username and password do not match any user in this service |
      | locked_3out_user   | secret_2sauce | Your username is invalid!      |
