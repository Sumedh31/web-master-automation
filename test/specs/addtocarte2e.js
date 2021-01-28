const HomePage = require('../pageobjects/homepage');
const ProductGrid = require('../pageobjects/productgrid');
const Login = require('../pageobjects/login');
const CheckOut = require('../pageobjects/checkout');
const Cart = require('../pageobjects/cart');

describe('Product search functionality without loggedin user', () => {
    it('Should add the wishlisted item to list', () => {        
        HomePage.open();
        browser.maximizeWindow();

        //Login to the site
        Login.login("testaccount@testaccount.com","Test1234!","testuser lastname");
        expect(Login.myAccountOrderDetailButton.getText().toLowerCase()).toMatch("order history and details");

        //Search for Dresses
        HomePage.search('Dresses');  
        browser.keys('Enter');
        HomePage.WaitUntilElementAppearsAfterSearch();
        expect(HomePage.searchResults).toBeDisplayed();        
        
        //Now click on first product's Add Cart Button
        ProductGrid.AddProductInTheCart(0);
        browser.pause(2000);

        Cart.proceedToCheckOutFromProductGrid.click();
        expect(Cart.cartTitle.getText().toLowerCase()).toMatch("Shopping-cart summary".toLowerCase());
        browser.pause(4000);
        // console.log(ProductGrid.orderSteps[0].getAttribute("class"));
        // expect(ProductGrid.orderSteps[0].getAttribute("class")).toHaveText("current");

        Cart.proceedToCheckOutSummaryStep.waitForExist({ timeout:3000, interval:400 });
        Cart.proceedToCheckOutSummaryStep.scrollIntoView();
        Cart.proceedToCheckOutSummaryStep.click();
        
        Cart.proceedToCheckOutAddressStep.waitForExist({ timeout:3000, interval:400 });
        Cart.proceedToCheckOutAddressStep.scrollIntoView();
        Cart.proceedToCheckOutAddressStep.click();
        
        Cart.termsAccept.waitForExist({ timeout:3000, interval:400 });
        Cart.termsAccept.scrollIntoView();
        Cart.termsAccept.click();

        Cart.proceedToCheckOutShippingStep.waitForExist({ timeout:3000, interval:400 });
        Cart.proceedToCheckOutShippingStep.scrollIntoView();
        Cart.proceedToCheckOutShippingStep.click();
        
        Cart.paymentBankWire.waitForExist({ timeout:3000, interval:400 });
        Cart.paymentBankWire.scrollIntoView();
        Cart.paymentBankWire.click();
        
        Cart.confirmOrder.waitForExist({ timeout:3000, interval:400 });
        Cart.confirmOrder.scrollIntoView();        
        Cart.confirmOrder.click();
        browser.pause(4000);

    })
})