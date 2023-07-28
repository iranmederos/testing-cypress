import ProductPurchasePage from '../../pages/addToCart'

describe('product purchase page', ()=>{

    beforeEach(() => {
        cy.visit('https://automationteststore.com/index.php?rt=product/product&product_id=50')
    })

    
    it('add to cart', () => {
        const purchase = new ProductPurchasePage()

        purchase.getQuantityField().clear().type("3")
        purchase.getAddToCartBtn().click()
    })

    it('add to cart and remove product', () => {
        const purchase = new ProductPurchasePage()

        purchase.getQuantityField().clear().type("5")
        purchase.getAddToCartBtn().click()
        purchase.getRemoveBtn().click()
    })

})