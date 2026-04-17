    import { $ } from '@wdio/globals'
    import Page from './page.js';
    
    class CartPage extends Page {
    
        public get checkoutBtn () {
            return $('#checkout');
        }
    
        public get firstName () {
            return $('#first-name');
        }
    
        public get lastName () {
            return $('#last-name');
        }
    
        public get postalCode () {
            return $('#postal-code');
        }
    
        public get continueBtn () {
            return $('#continue');
        }
    
        public get finishBtn () {
            return $('#finish');
        }
    
        public get completeHeader () {
            return $('.complete-header');
        }
    
        public async checkout (first: string, last: string, zip: string) {
            await this.checkoutBtn.click();
            await this.firstName.setValue(first);
            await this.lastName.setValue(last);
            await this.postalCode.setValue(zip);
            await this.continueBtn.click();
            await this.finishBtn.click();
        }
    }
    
    export default new CartPage();
    
    
