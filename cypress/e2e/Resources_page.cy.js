//Page objects
const ResourcesPage = require('../pages/ResourcesPage');

describe('Resources Page Validation', () => {

  beforeEach(() => {
    // Visita la página de Resources
    ResourcesPage.navigateToResourcesPage();
  });

  it('should display the correct title for the Resources page', () => {
    // Verifica que el título de la página sea el esperado
    cy.title().should('eq', 'Resources');
  });

  it('should contain a main heading for Resources', () => {
    // Verifica que exista un encabezado principal (h1) con el texto "Resources"
    cy.get('h1').should('be.visible').and('contain', 'Resources');
  });

  it('should display a list of external resources', () => {
    // Verifica que haya una lista (ul) de recursos visibles
    cy.get('ul').should('be.visible');

    // Opcional: Verifica que haya al menos un elemento de lista (li) dentro de la ul
    cy.get('ul li').its('length').should('be.gt', 0);
  });

  it('should have a link to the "Home" page', () => {
    // Verifica que exista un enlace a la página principal ("Home")
    cy.contains('a', 'Home').should('be.visible').and('have.attr', 'href', '/');
  });

  it('should navigate to the Home page when the "Home" link is clicked', () => {
    // Haz clic en el enlace "Home"
    cy.contains('a', 'Home').click();

    // Verifica que la URL haya cambiado a la página principal
    cy.url().should('eq', 'http://uitestingplayground.com/');

    // Opcional: Verifica un elemento en la página de inicio para confirmar la navegación
    cy.get('h1').should('contain', 'Welcome');
  });

  // Puedes añadir más tests aquí, por ejemplo:
  // - Verificar que los enlaces externos se abran en una nueva pestaña
  // - Validar el texto de cada elemento de la lista
});