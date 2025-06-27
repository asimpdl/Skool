describe('Check if the dasboard button shows content', () => {
       
    beforeEach(() => {
        cy.viewport(1920,1080)
        cy.visit('https://app.acharyatech.com');
    });
    
    it('Side bar visiblity Checking after page loads ', () => {
        cy.get('#root__layout').should('be.visible')
        cy.get('nav.minimal__nav__section__vertical').should('be.visible')
        cy.get('nav ul.minimal__nav__ul  li.minimal__nav__li').should('be.visible')
    });

    it('Check Minimize and Expand Sidebar working properly', () => {
        //Check if the toggle button is visible or not
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall').should('exist').and('be.visible')

        // Click to Minimize sidebar
        cy.get('.minimal__layout__nav__root .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall')
        .should('exist').and('be.visible')
            .click()
            .then(() => {
                //Initially check: Vertical nav is visible, mini nav is not exist
                cy.get('.minimal__layout__nav__root nav.minimal__nav__section__vertical').should('not.exist')
                cy.get('.minimal__layout__nav__root nav.minimal__nav__section__mini').should('exist').and('be.visible')
            })
        
        // Click again to Expand sidebar
        cy.get('.minimal__layout__nav__root .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall')
        .should('exist').and('be.visible')
            .click()
            .then(() => {
                // After expanding: Vertical nav should be visible , mini nav should not exist
                cy.get('.minimal__layout__nav__root nav.minimal__nav__section__vertical').should('exist').and('be.visible')
                cy.get('.minimal__layout__nav__root nav.minimal__nav__section__mini').should('not.exist')
             })
    });
});