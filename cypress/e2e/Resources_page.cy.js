//Page objects
const ResourcesPage = require('../pages/ResourcesPage');
const HomePage = require('../pages/HomePage');


describe('Resources Page Validation', () => {

  beforeEach(() => {
    // Visita la página de Resources
    ResourcesPage.navigateToResourcesPage();
  });

  it('should display the correct title for the Resources page', () => {
    // Verifica que el título de la página sea el esperado
    ResourcesPage.elements.resourcesTitle().should('eq', 'Resources');
  });

  it('should have a link to the "Home" page', () => {
    // Verifica que exista un enlace a la página principal ("Home")
    ResourcesPage.elements.homeButton().should('be.visible').and('have.attr', 'href', '/home');
  });

  it('should navigate to the Home page when the "Home" link is clicked', () => {
    // Haz clic en el enlace "Home"
    ResourcesPage.elements.homeButton().click();

    // Verifica que la URL haya cambiado a la página principal
    HomePage.validateHomePage();
  });

});