class shopingLocators {

    constructor() {
        this.quantityField = '[id="product_quantity"]'
        this.addToCartBtn = '[class="cart"]'
        this.removeBtn= '[class="btn btn-sm btn-default"]'
      }
}
  
  export default class  {
    
    constructor() {
      this.locators = new shopingLocators()
    }
    
    
    getQuantityField(){
        return cy.get(this.locators.quantityField)
    }
    
    getAddToCartBtn(){
        return cy.get(this.locators.addToCartBtn)
    }
    
    getRemoveBtn(){
        return cy.get(this.locators.removeBtn)
    }
  
}
    
