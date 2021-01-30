const HomePage = require('../pageobjects/homepage');
const ProductGrid = require('../pageobjects/productgrid');
const Login = require('../pageobjects/login');
const SignUp = require('../pageobjects/signup');
const Cart = require('../pageobjects/cart');

describe('Add product to cart and proceed through the checkout process', () => {
    it('The product should be ordered succesfully', () => {        
        HomePage.open();
        browser.maximizeWindow();

        //Login to the site
        if(!Login.login("testaccounttes@testaccounttes.com","Test1234!","testusertes lastnamtes"))
        {
            //SignUp.Signup("testaccount@testaccount.com","testuser","lastname","Test1234!");            
            SignUp.Signup("testaccounttes@testaccounttes.com","testusertes","lastnamtes","Test1234!");            

        }
        else{
            expect(Login.myAccountOrderDetailButton.getText().toLowerCase()).toMatch("order history and details");
        }
        

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

        //Summary page checkout
        Cart.proceedToCheckOutSummaryStep.waitForExist({ timeout:3000, interval:400 });
        Cart.proceedToCheckOutSummaryStep.scrollIntoView();
        Cart.proceedToCheckOutSummaryStep.click();
        //Address page checkout
        Cart.proceedToCheckOutAddressStep.waitForExist({ timeout:3000, interval:400 });
        Cart.proceedToCheckOutAddressStep.scrollIntoView();
        Cart.proceedToCheckOutAddressStep.click();
        

        //Shipping page checkout
        //Accept Terms
        Cart.termsAccept.waitForExist({ timeout:3000, interval:400 });
        Cart.termsAccept.scrollIntoView();
        Cart.termsAccept.click();
        //Shipping checkout
        Cart.proceedToCheckOutShippingStep.waitForExist({ timeout:3000, interval:400 });
        Cart.proceedToCheckOutShippingStep.scrollIntoView();
        Cart.proceedToCheckOutShippingStep.click();

        //Payment Checkout
        Cart.paymentBankWire.waitForExist({ timeout:3000, interval:400 });
        Cart.paymentBankWire.scrollIntoView();
        Cart.paymentBankWire.click();

        //Order confirmation
        Cart.confirmOrder.waitForExist({ timeout:3000, interval:400 });
        Cart.confirmOrder.scrollIntoView();        
        Cart.confirmOrder.click();
        browser.pause(4000);

    })
})