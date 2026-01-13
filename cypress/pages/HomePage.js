class HomePage{

    elements = {
        //Location: Amazon home page > Logo in the top left corner
        homeElementLogo:() => cy.get('#nav-logo'),
        //Location: Amazon home page > search field
        searchField:()=>cy.get('#twotabsearchtextbox'),
        //Location: Amazonhome page > menu > Insights option.
        allMenuIcon: () => cy.get('#nav-hamburger-menu')
    };

    //This method is to check cookies on page load. If the cookie message exists, it will accept all cookies.. 
    verifyCookies(){
        cy.isElementExist(cy.get('div#hs-eu-cookie-confirmation-inner > p#hs-eu-cookie-disclaimer')).then(() => {
            cy.log('Accepting Cookies.');
            this.elements.acceptCookiesBtn().click({force:true});
        });
    };

    
    //This method is to check if the home page loads correctly.
    validateHomePage(){
        cy.log('Validating home page');
        this.elements.homeElementLogo().should('be.visible');
    };

    
    //This method do mouse over to the insights top link and It will click on Blog option.
    openBlogSection(){
        cy.log('Open the “Blog” section');
        this.elements.menuInsights().trigger('mouseover');
        this.elements.blogLink().should('be.visible').trigger('mouseover').click({force:true});
    };

};
module.exports = new HomePage();