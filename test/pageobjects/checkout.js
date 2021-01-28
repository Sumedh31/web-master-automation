class CheckOut{

    /**
     * define selectors using getter methods
     */
    
    get proceedToCheckOutFromProductGrid () {return $('//a[@title="Proceed to checkout"]')}  
    get cartTitle () {return $('')};
}
module.exports=new CheckOut();