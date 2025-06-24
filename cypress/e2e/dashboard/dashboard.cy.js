describe('Dashboard Page', () => {
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
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall').should('exist')
        
        // Initially check: Vertical nav is visible, mini nav is not exist
        cy.get('.minimal__layout__nav__root nav.minimal__nav__section__vertical').should('be.visible');
        cy.get('.minimal__layout__nav__root nav.minimal__nav__section__mini').should('not.exist');

        // Click to Minimize sidebar
        cy.get('.minimal__layout__nav__root .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall')
            .should('exist')
            .click();
        
        // After minimizing: Vertical nav should not exist, mini nav should be visible
        cy.get('.minimal__layout__nav__root nav.minimal__nav__section__vertical').should('not.exist');
        cy.get('.minimal__layout__nav__root nav.minimal__nav__section__mini').should('be.visible');

        // Click again to Expand sidebar
        cy.get('.minimal__layout__nav__root .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall')
            .should('exist')
            .click();

        // After expanding: Vertical nav should be visible , mini nav should not exist
        cy.get('.minimal__layout__nav__root nav.minimal__nav__section__vertical').should('be.visible');
        cy.get('.minimal__layout__nav__root nav.minimal__nav__section__mini').should('not.exist');

    });
      
    it('Should navigate correctly when sidebar links are clicked', () => {
        cy.get('nav ul.minimal__nav__ul li.minimal__nav__li  a')
            .each(($link, index) => {
                // Get the href attribute before clicking
                const href = $link.attr('href');
                // Re-fetch DOM elements after a click & navigation
                cy.get('nav ul.minimal__nav__ul li.minimal__nav__li  a').eq(index).click();
                // Now assert if URL includes the href (or exact match)
                cy.url().should('include', href);
                // Go back to homepage or reset state for next iteration
                cy.visit('https://app.acharyatech.com');
            });
    });

    it('Check logo is working or not', () => {

        //Check if the logo is visible or not 
        cy.get('.MuiBox-root .minimal__logo__root').should('exist').should('be.visible');

        //Check if Logo is redirecting to baseURL or not while clicking
        cy.get('.MuiBox-root .minimal__logo__root')
            .should('have.attr', 'href', '/')
            .click();

        // Click to Minimize sidebar
        cy.get('.minimal__layout__nav__root .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall')
            .should('exist')
            .click();
        
        //Check if Logo is redirecting to baseURL or not while clicking
        cy.get('.MuiBox-root .minimal__logo__root')
            .should('have.attr', 'href', '/')
            .click();
    })
  });