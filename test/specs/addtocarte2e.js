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
        Login.login("sumedhrtv@gmail.com","Test1234!","Sumedh Tambe");
        expect(Login.myAccountOrderDetailButton).toHaveText("Order history and details");

        //Search for Dresses
        HomePage.search('Dresses');  
        browser.keys('Enter');
        HomePage.WaitUntilElementAppearsAfterSearch();
        expect(HomePage.searchResults).toBeDisplayed();        
        
        //Now click on first product's Add Cart Button
        ProductGrid.AddProductInTheCart(0);

        Cart.proceedToCheckOutFromProductGrid.click();
        expect(Cart.cartTitle).toHaveText("Shopping-cart summary");

        Cart.proceedToCheckOutFromProductGrid.click();
        browser.pause(1000)
        Cart.proceedToCheckOutFromProductGrid.click();
        Cart.termsAccept();
        Cart.proceedToCheckOutFromProductGrid.click();
        Cart.paymentBankWire.clcik();
        Cart.confirmOrder.click();


        
        
        // //After registration pop up is opened navigate to login link from the pop up
        // LoginRegist.ClickOnLoginLinkFromTheRegPopUp();
        
        // //Login to the site and check first name is displayed with my account icon
        // LoginRegist.login('sumedhrtv@gmail.com','Test1234!','Sumedh');
        
        // //After login Ensure that correct number of wishlisted items are present
        // expect(HomePage.numberOfWishListedItems).toHaveText('1');


        // //Go to wishlisted page
        // ElementGrid.ClickToGoToWishListedProduct();

        // //Remove the product from the wishlist
        // WishList.RemoveWishListedItem();
    })
})