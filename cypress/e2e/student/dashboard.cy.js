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
    

  it('should show and navigate all student menu items including Settings and Certificate submenu', () => {
    const mainUrls = [
      '/student/dashboard',
      '/student/admission',
    ];
  
    const certificateSubUrls = [
      '/student/certificate/issue',
      '/student/certificate/type'
    ];

    const settingSubUrls = [
      '/student/setting/datavalue',
    ];
  
    // Open the Student Menu
    cy.get('[href="/student"]').should('exist').and('be.visible').click();
  
    // Loop through main menu URLs
    mainUrls.forEach((url) => {
      cy.get(`a[href="${url}"]`).should('exist').and('be.visible').click();
      cy.url().should('include', url);
    });

    // Click the "Programs" div
    cy.contains('.minimal__nav__item__texts', 'Programs')
      .should('exist')
      .and('be.visible')
      .click();
    cy.url().should('include','https://app.acharyatech.com/student');
     
    // Click the "Certificate" div
    cy.contains('.minimal__nav__item__texts', 'Certificate')
      .should('exist')
      .and('be.visible')
      .click();
  
    // Loop through Certificate sub-menu items
    certificateSubUrls.forEach((url) => {
      cy.get(`a[href="${url}"]`).should('exist').and('be.visible').click();
      cy.url().should('include', url);
    });

    // Click the "Settings" div
    cy.contains('.minimal__nav__item__texts', 'Settings')
      .should('exist')
      .and('be.visible')
      .click();
  
    // Loop through Setting sub-menu items
    settingSubUrls.forEach((url) => {
      cy.get(`a[href="${url}"]`).should('exist').and('be.visible').click();
      cy.url().should('include', url);
    });
  });
});