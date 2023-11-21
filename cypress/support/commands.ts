// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// Cypress.Commands.add('interceptGetStaticResponse', (url: string, stubbedResponseFileName: string) => {
//     return cy.intercept('GET', url, {fixture: stubbedResponseFileName});
// });
Cypress.Commands.add('interceptGetStaticResponse', (url: string, mockResponseFileName: string) => {
  return cy.intercept('GET', url, (req) => {
      //Send a stub response for an intercepted request. 
      req.reply({
        statusCode: 200, // default
        headers: {
          'Content-Type': 'text/html; charset=UTF-8', // Set the content type as HTML
        },
        fixture: mockResponseFileName
      //   fixture: 'home-main-origin.jpeg'
      })
  })
});

Cypress.Commands.add('storeInterceptedServerResponse', (alias: string, fileNameWithExt: string) => {
  // Fetch the intercepted request
  return cy.wait(`@${alias}`).then((interception) => {
    // Log the request details
    console.log('Intercepted Request:', interception.request);
    // Log the response details
    console.log('Real Server Response:', interception.response);
    cy.writeFile(`cypress/fixtures/${fileNameWithExt}`, interception.response?.body);
  });
});

Cypress.Commands.add('disableCache', () => {
  if (Cypress.browser.family === 'chromium') {
      Cypress.automation('remote:debugger:protocol', {
        command: 'Network.enable',
        params: {}
      });
      Cypress.automation('remote:debugger:protocol', {
        command: 'Network.setCacheDisabled',
        params: { cacheDisabled: true }
      });
  }
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Custom command to intercept Get Static Response(e.g. HTML page, search product result, etc).
         * @example cy.interceptGetStaticResponse(url, mockFileName).as('getResponseAlias')
         */
        interceptGetStaticResponse(url: string, stubbedResponseFileName: string): Chainable<any>;
        /**
         * Custom command to store intercepted Get server real Response(e.g. HTML page, search product result, etc).
         * @example cy.interceptGetStaticResponse(alias, fileNameWithExt).as('getResponseAlias')
         */
        storeInterceptedServerResponse(alias: string, fileNameWithExt: string): Chainable<any>;
        /**
         * Custom command to disable cache.
         * @example cy.disableCache();
         */
        disableCache();
    }
}
