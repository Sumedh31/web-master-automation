class Cart{

    /**
     * define selectors using getter methods
     */
    
    get proceedToCheckOutFromProductGrid () {return $('//a[@title="Proceed to checkout"]')}  
    get proceedToCheckOutSummaryStep () {return $('//p[@class="cart_navigation clearfix"]/a[@title="Proceed to checkout"]/span')}  
    get proceedToCheckOutAddressStep () {return $('button[name="processAddress"]')}
    get proceedToCheckOutShippingStep () {return $('button[name="processCarrier"]')}
    get cartTitle () {return $('#cart_title')};
    get termsAccept (){return $('.checker #cgv')}
    get paymentBankWire () {return $('#HOOK_PAYMENT>div>div>p[class="payment_module"]')}
    get confirmOrder() {return $('#cart_navigation button[type="submit"]>span')}

    RemoveWishListedItem(){
        this.wishListedItemsDelete.click();
        this.wishListedItemsDelete.waitForExist({ timeout:5000,reverse:true, timeoutMsg:"Wishlist counter was not reduced", interval:400 })
    }
    
    



}
module.exports=new Cart();