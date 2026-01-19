 //Data
const Data = require('../fixtures/data.json');


class ResorcesPage{

    elements = {
        //Location: Home page > Resources button
        resourcesButton:()=> cy.get('#navbarSupportedContent li:last-child a').should('have.text', 'Resources'),
        //Location: Resources page -> Title
        resourcesTitle:()=> cy.title().should('eq', 'Resources'),
        //Location: Resources page -> Home button
        homeButton:()=> cy.contains('a', 'Home'),
    };

    //This method is to check if the home page loads correctly.
    navigateToResourcesPage(){
        cy.log('Navigating to resorces page');
        cy.visit(Data.baseurl);
        this.elements.resourcesButton().click();
    };

    //This method is to check if the home page loads correctly.
    validateHomePage(){
        cy.log('Validating resources page');
        this.elements.homeElementLogo().should('be.visible');
    };

};
module.exports = new ResorcesPage();