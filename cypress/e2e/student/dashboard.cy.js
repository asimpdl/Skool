describe('Dashboard Landing page after Login', () => {
    beforeEach(() => {
      cy.visit('https://app.acharyatech.com/student');
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
    // check sub-menu navigation of student from side-bar
  it('should show and navigate all student menu items', () => {
    const expectedUrls = ['/student/dashboard', '/student/admission', '/student/certificate/issue', '/student/certificate/issue', '/student/setting/datavalue'];
    cy.get('[href="/student"]').click()
     cy.get('.MuiCollapse-wrapperInner > .minimal__nav__ul .MuiButtonBase-root')
       .each(($el) => {
        cy.wrap($el).invoke('attr', 'href').then((href) => {
        expect(expectedUrls).to.include(href);  // Check href is expected
        cy.wrap($el).click();
        cy.url().should('include', href);
        
      });
      });    
  });
});

