//Page objects
const HomePage = require('../pages/HomePage');

//Data
const Data = require('../fixtures/data.json');

describe('Amazon - Home page', () => {

   /**
    * Automated tests for BlankFactor.
    */
    beforeEach(() => {
        cy.log('Navigate to “https://www.amazon.com/”');
        cy.visit(Data.baseurl);
    });

  it('Verify that the home page is displayed', () => {
    // 1. Verify that the URL is correct
    cy.url().should('include', 'amazon.com');

    // 2. Verify that the logo in the upper left corner is visible
    HomePage.validateHomePage();

    // 3. Verify that the search field is present
    HomePage.elements.searchField().should('be.visible');
  });

});