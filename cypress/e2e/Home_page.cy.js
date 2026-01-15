//Page objects
const HomePage = require('../pages/HomePage');

//Data
const Data = require('../fixtures/data.json');

describe('UI Test Automation Playground - Home page', () => {

   /**
    * Automated tests for the page http://uitestingplayground.com/.
    */
    beforeEach(() => {
        cy.log('Navigate to “http://uitestingplayground.com/”');
        cy.visit(Data.baseurl);
    });

  it('Verify that the home page is displayed', () => {
    // 1. Verify that the URL is correct
    cy.url().should('include', 'uitestingplayground.com/');

    // 2. Verify that the logo in the upper left corner is visible
    HomePage.validateHomePage();

    // 3. Verify that the home button is present
    HomePage.elements.homeButton().should('be.visible');
  });

});