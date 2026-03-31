import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('#user-name');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnSubmit () {
        return $('#login-button');
    }

    public get add_backpack () {
        return $('#add-to-cart-sauce-labs-backpack');
    }
    
    public get add_light () {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    public get add_t_shirt () {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    public get add_jacket(){
        return $('#add-to-cart-sauce-labs-fleece-jacket');
    }
    public get add_onesie(){
        return $('#add-to-cart-sauce-labs-onesie');
    }
    public get add_red(){
        return $('#add-to-cart-test.allthethings()-t-shirt-(red)');
    }    


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();

    
    }
    public async add(){
        await this.add_backpack.click();
        await this.add_light.click();
        await this.add_t_shirt.click();
        await this.add_jacket.click();
        await this.add_onesie.click();
        await this.add_red.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('');
    }
}

export default new LoginPage();
