class HomePage{

    elements = {
        //Location: Home page > Logo in the top right 
        homeElementLogo:() => cy.get('img[src="/static/cube.png"]'),
        //Location: Home page > Home button
        homeButton:()=> cy.get('#navbarSupportedContent li:first-child a').should('have.text', 'Home'),
        //Location: Home page > Resources button
        resourcesButton:()=> cy.get('#navbarSupportedContent li:last-child a').should('have.text', 'Resources'),
    };

    
    //This method is to check if the home page loads correctly.
    validateHomePage(){
        cy.log('Validating home page');
        this.elements.homeElementLogo().should('be.visible');
    };

};
module.exports = new HomePage();