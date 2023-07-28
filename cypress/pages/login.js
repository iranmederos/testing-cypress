class LoginLocators {

    constructor() {
      this.nameField = '[id="loginFrm_loginname"]'
      
      this.passField = '[id="loginFrm_password"]'

      this.loginBtn = '[title="Login"]'

      this.welcomeText = '[id="customernav"]'
      
      this.errorText = '[class="alert alert-error alert-danger"]'
    }
  }
  
  export default class LoginPage {
    
    constructor() {
      this.locators = new LoginLocators()
    }
    
    getNameField(){
      return cy.get(this.locators.nameField)
    }
    
    getPassField(){
      return cy.get(this.locators.passField)
    }
  
    getLoginBtn(){
      return cy.get(this.locators.loginBtn)
    }
  
    getWelcomeText(){
      return cy.get(this.locators.welcomeText)
    }
  
    getErrorText(){
      return cy.get(this.locators.errorText)
    }
  }