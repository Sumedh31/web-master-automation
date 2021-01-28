class Cart{

    /**
     * define selectors using getter methods
     */
    
    get proceedToCheckOutFromProductGrid () {return $('//a[@title="Proceed to checkout"]')}  
    get cartTitle () {return $('#cart_title')};
    get termsAccept (){return $('.checker #cgv')}
    get paymentBankWire () {return $('.bankwire')}
    get confirmOrder() {return $('#cart_navigation button[type="submit"]')}

    RemoveWishListedItem(){
        this.wishListedItemsDelete.click();
        this.wishListedItemsDelete.waitForExist({ timeout:5000,reverse:true, timeoutMsg:"Wishlist counter was not reduced", interval:400 })
    }
    
    



}
module.exports=new Cart();