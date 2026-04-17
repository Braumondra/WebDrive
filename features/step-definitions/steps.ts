import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';


import LoginPage from '../pageobjects/login_page.ts';
import InventoryPage from '../pageobjects/InventoryPage.ts';
import CartPage from '../pageobjects/CartPage.ts';


    Given(/^I am on the login page$/, async () => {
        await LoginPage.open();
    });
    When(/^I login with (.*) and (.*)$/, async (username, password) => {
        await LoginPage.login(username, password);
    });
    /*Then(/^I should see error message (.*)$/, async (message) => {
        await expect(LoginPage.errorMessage).toHaveText(expect.stringContaining(message));
    });*/
Then(/^I should see (.*)$/, async (text) => {
    if (text === 'Products') {
        await expect(InventoryPage.title).toBeDisplayed();
        await expect(InventoryPage.title).toHaveText(text);
    } else {
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage)
            .toHaveText(expect.stringContaining(text));
    }
});
    Then(/^I should be logged in$/, async () => {
        await expect(InventoryPage.title).toHaveText('Products');
    });
    When(/^I add products to cart$/, async () => {
        await InventoryPage.addProducts(); });
    When(/^I go to cart$/, async () => { await InventoryPage.goToCart();
    });
    When(/^I complete checkout$/, async () => {
        await CartPage.checkout('John', 'Doe', '12345');
    });
    Then(/^I should see order confirmation$/, async () => {
        await expect(CartPage.completeHeader).toHaveText('Thank you for your order!');
    });
    When(/^I logout$/, async () => {
        await InventoryPage.logout();
    });
    Then(/^I should be on login page$/, async () => {
        await expect(LoginPage.inputUsername).toBeExisting();
    });