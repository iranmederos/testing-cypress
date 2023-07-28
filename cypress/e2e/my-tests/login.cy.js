import LoginPage from '../../pages/login';

describe('Automatization store login test', () => {

    beforeEach(() => {
        cy.visit('https://automationteststore.com/index.php?rt=account/login')
    })


    it('valid login', () => {
        const login = new LoginPage()

        login.getNameField().type("iranmederos")
        login.getPassField().type("123456")
    
        login.getLoginBtn().click()

        login.getWelcomeText().contains("Welcome back Iran").should("be.visible")
    })


    it('invalid login', () => {
        const login = new LoginPage()

        login.getNameField().type("iranmederos")
        login.getPassField().type("654321")

        login.getLoginBtn().click()

        login.getErrorText().contains("Error: Incorrect login or password provided.").should("be.visible")
    })
})

