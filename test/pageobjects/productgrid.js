class ProductGrid{

    /**
     * define selectors using getter methods
     */
    get products () {return $$('.ajax_block_product .replace-2x')}
    get addToCart () {return $('//div[@class="button-container"]//span[contains(text(),"Add to cart")] ')}    
    get accountNameDisplayed () {return $("//div[contains(@class,'IconsButtonTray__IconItemWrapper')]//span[contains(text(),'" +firstName + "')]")}
    get wishListedProductButton () {return $('svg[class="icon-wishlist"]')}

    AddProductInTheCart(number){
        this.products[number].scrollIntoView();
        this.products[number].moveTo();
        browser.pause(2000);
        //this.products[number].$('//div[@class="button-container"]//span[contains(text(),"Add to cart")] ').click();
        this.products[number].$(this.addToCart).click();
    }
    WaitUntilNameIsDisplayed(Name){

        //$("//div[contains(@class,'IconsButtonTray__IconItemWrapper')]//span[contains(text(),'" +firstName + "')]").waitForExist({ timeout:5000, interval:400 });
        $("//div[@class='header_user_info']//span[contains(text(),'" +Name+ "')] ").waitForExist({ timeout:5000, interval:400 });
        
    }
    ClickToGoToWishListedProduct(){
        this.wishListedProductButton.click();
    }

}
module.exports=new ProductGrid();