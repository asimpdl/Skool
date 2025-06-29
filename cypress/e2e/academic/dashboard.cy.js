describe('Dashboard Landing page after Login', () => {
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
    // check sub-menu navigation of student from side-bar
    it('should show and navigate all student menu items', () => {
      const expectedUrls = ['/academic/dashboard', '/academic/subject?pageSize=25&current=1',
        '/academic/timeline?pageSize=10000&current=1&filters[0][field]=name&filters[0][value]=&filters[0][operator]=eq',];
      cy.get('[href="/academic"]').click();
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