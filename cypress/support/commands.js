Cypress.Commands.add('checkSidebarVisibility', () => {
    cy.get('#root__layout').should('be.visible');
    cy.get('nav.minimal__nav__section__vertical').should('be.visible');
    cy.get('nav ul.minimal__nav__ul li.minimal__nav__li').should('be.visible');
  });
  
  Cypress.Commands.add('toggleSidebarAndCheck', () => {
    const toggleBtn = '.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall';
    const verticalNav = '.minimal__layout__nav__root nav.minimal__nav__section__vertical';
    const miniNav = '.minimal__layout__nav__root nav.minimal__nav__section__mini';
  
    cy.get(toggleBtn).should('exist').and('be.visible');
  
    // Minimize
    cy.get(toggleBtn).click();
    cy.get(verticalNav).should('not.exist');
    cy.get(miniNav).should('exist').and('be.visible');
  
    // Expand
    cy.get(toggleBtn).click();
    cy.get(verticalNav).should('exist').and('be.visible');
    cy.get(miniNav).should('not.exist');
  });
  
  Cypress.Commands.add('checkSidebarLinksNavigation', () => {
    cy.get('nav ul.minimal__nav__ul li.minimal__nav__li a')
      .each(($link, index) => {
        const href = $link.attr('href');
        cy.get('nav ul.minimal__nav__ul li.minimal__nav__li a')
          .eq(index)
          .click();
        cy.url().should('include', href);
        cy.visit('https://app.acharyatech.com'); // Reset for next loop
      });
  });
  
  Cypress.Commands.add('checkLogoRedirection', () => {
    const logo = '.MuiBox-root .minimal__logo__root';
    const toggleBtn = '.minimal__layout__nav__root .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall';
  
    cy.get(logo).should('exist').and('be.visible');
    cy.get(logo).should('have.attr', 'href', '/').click();
  
    cy.get(toggleBtn).click();
    cy.get(logo).should('have.attr', 'href', '/').click();
  });
  