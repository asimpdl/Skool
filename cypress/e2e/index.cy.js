describe('Dashboard Landing page after Login', () => {
    beforeEach(() => {
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
  }); 