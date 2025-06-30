describe('Academic Dashboard: Landing Page Behavior After Login', () => {
  beforeEach(() => {
    cy.visit('https://app.acharyatech.com/academic');
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
  
  it('Logo should redirect to home when clicked', () => {
    cy.checkLogoRedirection();
  });
  
}); 

describe('Student Section: Menu Navigation and Submenu Verification', () => {
    beforeEach(() => {
      cy.visit('https://app.acharyatech.com/student');
    });
    // check sub-menu navigation of student from side-bar    
    it('should show and navigate all student menu items including Settings submenu', () => {
      const mainUrls = [
        '/academic/dashboard',
        '/academic/subject',
        '/academic/timeline',
      ];
    
      const settingSubUrls = [
        '/academic/setting/batch',
        '/academic/setting/program',
        '/academic/setting/class',
        '/academic/setting/class-subject',
        '/academic/setting/section',
        '/academic/setting/period',
        '/academic/setting/room',
        '/academic/setting/house',
        '/academic/setting/hostel',
        '/academic/setting/session',
      ];
    
      // Open the Academic Menu
      cy.get('[href="/academic"]').should('exist').and('be.visible').click();
    
      // Loop through main menu URLs
      mainUrls.forEach((url) => {
        cy.get(`a[href="${url}"]`).should('exist').and('be.visible').click();
        cy.url().should('include', url);
        cy.wait(300);
        cy.get('[href="/academic"]').click(); // re-expand menu if needed
      });
    
      // Click the "Settings" div
      cy.contains('.minimal__nav__item__title', 'Settings')
        .should('exist')
        .and('be.visible')
        .click();
    
      // Loop through submenu items
      settingSubUrls.forEach((url) => {
        cy.get(`a[href="${url}"]`)
          .should('exist')
          .and('be.visible')
          .click();
        cy.url().should('include', url);
        cy.wait(300);
    
        // Re-open the menu after navigation
        cy.get('[href="/academic"]').click();
        cy.contains('.minimal__nav__item__title', 'Settings').click();
      });
    });
});