Feature: E2E flow

  Scenario: User can complete an order
    Given I am on the login page
    When I login with standard_user and secret_sauce
    And I add products to cart
    And I go to cart
    And I complete checkout
    Then I should see order confirmation

  Scenario: User can logout
    Given I am on the login page
    When I login with standard_user and secret_sauce
    And I logout
    Then I should be on login page