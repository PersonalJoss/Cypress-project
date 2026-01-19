 //Data
const Data = require('../fixtures/data.json');


class ResorcesPage{

    elements = {
        //Location: Home page > Resources button
        resourcesButton:()=> cy.get('#navbarSupportedContent li:last-child a').should('have.text', 'Resources'),
    };

    //This method is to check if the home page loads correctly.
    navigateToResourcesPage(){
        cy.log('Navigating to resorces page');
        cy.visit(Data.baseurl);
        cy.click(resourcesButton);
    };

    //This method is to check if the home page loads correctly.
    validateHomePage(){
        cy.log('Validating resources page');
        this.elements.homeElementLogo().should('be.visible');
    };

};
module.exports = new ResorcesPage();