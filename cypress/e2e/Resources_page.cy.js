//Page objects
const ResourcesPage = require('../pages/ResourcesPage');
const HomePage = require('../pages/HomePage');


describe('Resources Page Validation', () => {

  beforeEach(() => {
    // Visit the Resources page
    ResourcesPage.navigateToResourcesPage();
  });

  it('should display the correct title for the Resources page', () => {
    // Verify that the page title is as expected
    ResourcesPage.elements.resourcesTitle().should('eq', 'Resources');
  });

  it('should have a link to the "Home" page', () => {
    // Verify that there is a link to the main page ("Home")
    ResourcesPage.elements.homeButton().should('be.visible').and('have.attr', 'href', '/home');
  });

  it('should navigate to the Home page when the "Home" link is clicked', () => {
    // Click on the "Home" link
    ResourcesPage.elements.homeButton().click();

    // Verify that the URL has changed to the homepage.
    HomePage.validateHomePage();
  });

});