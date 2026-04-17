import { $ } from '@wdio/globals'
import Page from './page.js';

class InventoryPage extends Page {

    public get title () {
        return $('.title');
    }

    public get cartIcon () {
        return $('.shopping_cart_link');
    }

    public get menuBtn() {
        return $('#react-burger-menu-btn');
    }

    public get logoutLink() {
        return $('#logout_sidebar_link');
    }

    public getAddToCartButton(product: string) {
        return $(`#add-to-cart-${product}`);
    }

    public async addProducts() {
        const products = [
            'sauce-labs-backpack',
            'sauce-labs-bike-light',
            'sauce-labs-bolt-t-shirt',
            'sauce-labs-fleece-jacket',
            'sauce-labs-onesie',
            'test\\.allthethings\\(\\)-t-shirt-\\(red\\)'
        ];

        for (const product of products) {
            await this.getAddToCartButton(product).click();
        }
    }

    public async goToCart () {
        await this.cartIcon.click();
    }

    public async logout() {
        await this.menuBtn.click();
        await this.logoutLink.waitForDisplayed();
        await this.logoutLink.click();
    }
}

export default new InventoryPage();