describe('Dashboard Page', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit('https://app.acharyatech.com');
    });
    
    it('Sidebar should be visible after page load', () => {
      cy.checkSidebarVisibility();
    });
  
    it('Sidebar should minimize and expand properly', () => {
      cy.toggleSidebarAndCheck();
    });
  
    it('Sidebar links should navigate correctly', () => {
      cy.checkSidebarLinksNavigation();
    });
  
    it('Logo should redirect to home when clicked', () => {
      cy.checkLogoRedirection();
    });

    it('Dashboard content must be visible', () => {
        //As this is in under constructions now. so i just checked if the content or particular div is exist and visible or not!!!
        
        // Check main layout container is visible
        cy.get('.minimal__layout__main').should('exist').and('be.visible');
  
        // Check dashboard card container is visible
        cy.get('.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiCard-root')
            .should('exist')
            .and('be.visible');
    });
  });
  