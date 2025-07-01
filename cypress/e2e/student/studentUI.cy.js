// describe('Student Dashboard: Landing Page Behavior After Login', () => {
//   beforeEach(() => {
//     cy.visit('https://app.acharyatech.com/student');
//   });

//   it('Sidebar should be visible after page load', () => {
//     cy.checkSidebarVisibility();
//   });

//   it('Sidebar should minimize and expand properly', () => {
//     cy.toggleSidebarAndCheck();
//   });

//   it('Sidebar links should navigate correctly', () => {
//     cy.checkSidebarLinksNavigation();
//   });

//   it('Logo should redirect to home when clicked', () => {
//     cy.checkLogoRedirection();
//   });

//   it('Logo should redirect to home when clicked', () => {
//     cy.checkLogoRedirection();
//   });
// });

// describe('Student Section: Menu Navigation and Submenu Verification', () => {
//   beforeEach(() => {
//     cy.visit('https://app.acharyatech.com/student')
//   });

//   it('should show and navigate all student menu items including Settings and Certificate submenu', () => {
//     const mainUrls = [
//       '/student/dashboard',
//       '/student/admission',
//     ];
  
//     const certificateSubUrls = [
//       '/student/certificate/issue',
//       '/student/certificate/type'
//     ];
  
//     const settingSubUrls = [
//       '/student/setting/datavalue',
//     ];
  
//     // Open the Student Menu
//     cy.get('[href="/student"]').should('exist').and('be.visible').click();
  
//     // Loop through main menu URLs
//     mainUrls.forEach((url) => {
//       cy.get(`a[href="${url}"]`).should('exist').and('be.visible').click()
//       cy.url().should('include', url)
//     });
  
//     // Click the "Programs" div
//     cy.contains('.minimal__nav__item__texts', 'Programs')
//       .should('exist')
//       .and('be.visible')
//       .click()
//     cy.url().should('include','https://app.acharyatech.com/student')
     
//     // Click the "Certificate" div
//     cy.contains('.minimal__nav__item__texts', 'Certificate')
//       .should('exist')
//       .and('be.visible')
//       .click()
  
//     // Loop through Certificate sub-menu items
//     certificateSubUrls.forEach((url) => {
//       cy.get(`a[href="${url}"]`).should('exist').and('be.visible').click()
//       cy.url().should('include', url)
//     });
  
//     // Click the "Settings" div
//     cy.contains('.minimal__nav__item__texts', 'Settings')
//       .should('exist')
//       .and('be.visible')
//       .click()
  
//     // Loop through Setting sub-menu items
//     settingSubUrls.forEach((url) => {
//       cy.get(`a[href="${url}"]`).should('exist').and('be.visible').click()
//       cy.url().should('include', url);
//     })
//   });
// });

// describe('Dashboard', () => {
//     beforeEach(() => {
//       cy.visit('https://app.acharyatech.com')
//       // Navigate to dashboard
//       cy.get('a[href="/student"]').click()
//       cy.get('a[href="/student/dashboard"]').click()
//     });

//   it('Dashboard Count Data Display', () => {
      
//     // Confirm the summary cards container is visible
//     cy.get('.MuiCardContent-root').should('be.visible')
//     cy.get('.MuiPaper-elevation > .MuiBox-root').should('be.visible')
  
//     // Labels to check
//     const labels = [
//       'Current Students',
//       'Pending Admission',
//       'Total Parents',
//       'Total Certificates',
//     ];
  
//     // Check each label and its numeric value
//     labels.forEach((label) => {
//       cy.contains(label)
//         .should('be.visible')
//         .parent() // go to wrapper div
//         .should('be.visible')
//         .within(() => {
//           cy.get('div').first().invoke('text').should('match', /^\d+$/)   // number exists
//         });
//     });
//   });  

//   // it('Dashboard Count Data Should Match API', () => {

//   //   // Navigate to dashboard
//   //   cy.get('a[href="/student"]').click()
//   //   cy.get('a[href="/student/dashboard"]').click()
//   //   cy.wait(100)
//   //   cy.request('https://m2.acharyatech.com/student/dashboard/status').then((response) => {
//   //     cy.log(JSON.stringify(response.body))
//   //     const apiData = response.body
  
//   //     const labelToKeyMap = {
//   //       'Current Students': apiData.students,
//   //       'Pending Admission': apiData.pendingAdmission,
//   //       'Total Parents': apiData.parents,
//   //       'Total Certificates': apiData.certificates,
//   //     };
      
//   //     // Loop over each label and compare number from UI with API
//   //     Object.entries(labelToKeyMap).forEach(([label, expectedValue]) => {
//   //         cy.contains(label)
//   //           .should('be.visible')
//   //           .parent()
//   //         .within(() => {
//   //           cy.get('div')
//   //             .first()
//   //             .invoke('text')
//   //             .then((text) => {
//   //                 const uiValue = parseInt(text.trim(), 10)
//   //                 expect(uiValue).to.eq(expectedValue)
//   //               });
//   //         });
//   //     });      
//   //   }); 
//   // });
  
//   it('Student Dashboard: Charts and Table', () => {
    
//     // cy.get('.MuiCard-root .MuiCardHeader-root .MuiCardHeader-content .MuiCardHeader-title')
//     //   .should('exist').and('be.visible')
//     cy.get('.MuiGrid2-root').should('exist').and('be.visible')
//   }); 
// });

// describe('Programs', () => {
//   beforeEach(() => {
//     cy.visit('https://app.acharyatech.com')
//     // Navigate to program
//     cy.get('a[href="/student"]').click()
//     // cy.get('a[href="/student/program"]').click()
//   });

//   it('Programs visibility', () => {
//     cy.get('.MuiBreadcrumbs-ol').should('exist').and('be.visible')
//     cy.get('.MuiCardHeader-root').should('exist').and('be.visible')
//     .within(() => {
//       cy.get('.MuiCardHeader-content > .MuiTypography-root').should('exist').and('be.visible')
//       cy.get('form > .MuiBox-root').should('exist').and('be.visible')
//         .within(() => {
//           cy.get('.MuiInputBase-input').should('exist').and('be.visible')
//           cy.get('.MuiButtonBase-root').should('exist').and('be.visible')
//         });
//     });
//     //checks the program type data visibility
//     cy.get('.MuiCardContent-root > .MuiBox-root').should('exist').and('be.visible')
//       .within(() => {
//         cy.get('svg[role="img"]').should('exist').and('be.visible')
//         cy.get('p').should('exist').and('be.visible')
//       });
//   });
// });

describe('Admission UI and its Functionality', () => {
  beforeEach(() => {
    cy.visit('https://app.acharyatech.com')
    // Navigate to program
    cy.get('a[href="/student"]').click()
    cy.get('a[href="/student/admission"]').click()
  });

  it('Admission visibility', () => {
    cy.get('.MuiBreadcrumbs-ol').should('exist').and('be.visible').contains('Admission')
    cy.get('.MuiCardHeader-root').should('exist').and('be.visible')
    .within(() => {
      cy.get('.MuiCardHeader-content > .MuiTypography-root').should('exist').and('be.visible').contains('Admissions')
      cy.get('form > .MuiBox-root').should('exist').and('be.visible')
      .within(() => {
        cy.get('.MuiInputBase-input').should('exist').and('be.visible')
        cy.get('.MuiButtonBase-root').should('exist').and('be.visible')
      });
      cy.get('.MuiButton-containedSecondary').should('exist').and('be.visible').contains('Import')
      cy.get('.MuiButton-containedInherit').should('exist').and('be.visible').contains('New admission')
    });
    cy.get('.MuiCardContent-root').should('exist').and('be.visible')
  });

  it('Admision Details Import', () => {
    //
  });
});