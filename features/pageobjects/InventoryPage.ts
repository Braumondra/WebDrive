import { $ } from '@wdio/globals'
import Page from './page.js';

class InventoryPage extends Page {

    public get title () {
        return $('.title');
    }

    public get addBackpack () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    public get addBikeLight () {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    public get cartIcon () {
        return $('.shopping_cart_link');
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

    public async addProducts(){
        await this.add_backpack.click();
        await this.add_light.click();
        await this.add_t_shirt.click();
        await this.add_jacket.click();
        await this.add_onesie.click();
        await this.add_red.click();
    }
    /*public async addProducts () {
        await this.addBackpack.click();
        await this.addBikeLight.click();
    }*/

    public async goToCart () {
        await this.cartIcon.click();
    }
    public get menuBtn() {
        return $('#react-burger-menu-btn');
    }

    public get logoutLink() {
        return $('#logout_sidebar_link');
    }

    public async logout() {
        await this.menuBtn.click();
        await this.logoutLink.click();
    }
}

export default new InventoryPage();