import { Then } from "@badeball/cypress-cucumber-preprocessor";
import DemoStoreHomePage from '../pages/DemoStoreHomePage';
import _ from "lodash";
import "cypress-xpath";
import "../../support/commands";
import DemoStoreSearchPage from "../pages/DemoStoreSearchPage";

const searchProductQueryUrl = 'https://magento.softwaretestingboard.com/catalogsearch/result/?q=';

Then("User type in product name e.g. {string} in the Search Bar, using {string} search response",
     (productToSearch: string = 'backpack', realOrStubbed: ('REAL' | 'STUBBED') = 'REAL') => {
  const searchBackpackResultUrl = `${searchProductQueryUrl}${productToSearch}`;
  const searchBackpackResponseFile = 'getCatalogSearchResultByBackpack.html';
  const searchBackpackMockResponseFile = 'getCatalogSearchResultByBackpack.latest.html';

  if(realOrStubbed === "STUBBED") {
    cy.interceptGetStaticResponse(searchBackpackResultUrl, searchBackpackMockResponseFile).as('searchBackpackResult');
  } else {
    cy.intercept('GET', searchBackpackResultUrl).as('searchBackpackResult');
  }

  cy.get(DemoStoreHomePage.searchBoxLocator).clear();
  cy.get(DemoStoreHomePage.searchBoxLocator).type(productToSearch);

  // Validate searched list length
  cy.get(DemoStoreHomePage.searchAutoCompleteListLocator).find('li').its('length').should('eq', 5);

  // Validate auto-complete dropdown list should contains the searching keywords
  cy.get(DemoStoreHomePage.searchAutoCompleteOptionsLocator).each(($row) => {
    cy.wrap($row).should('contain.text', "backpack");
  });

  // Trigger search
  cy.get(DemoStoreHomePage.searchBoxLocator).type('{enter}');

  if(realOrStubbed === "REAL") {
    cy.task('isFileExisting', `cypress/fixtures/${searchBackpackResponseFile}`).then((existing) => {
      if (!existing) {
        cy.storeInterceptedServerResponse('searchBackpackResult', searchBackpackResponseFile);
      } else {
        // Update Stubbed response with the latest real web server response
        cy.storeInterceptedServerResponse('searchBackpackResult', searchBackpackMockResponseFile);
      }
    });
  }
});

Then("User see the search {string} results and validate the search result", (productToSearch: string = 'backpack') => {
  cy.title().should('eq', "Search results for: 'backpack'");
  cy.url().should('contains', `${searchProductQueryUrl}${productToSearch}`);
  cy.get(DemoStoreSearchPage.pageTitleWrapperLocator)
    .should('have.text', "Search results for: 'backpack'");
 
  cy.get(DemoStoreSearchPage.compareProductsLocator)
    .should('have.text', "Compare Products");
  
  cy.xpath(DemoStoreSearchPage.myWishListLocator).should('be.visible');
  cy.get(DemoStoreSearchPage.totalAmountLocator)
    .should('contain.text', "5")
    .should('contain.text', " Items");
  cy.xpath(DemoStoreSearchPage.productItemDrivenBackpackLink).should('be.visible');
  cy.get(DemoStoreSearchPage.productImagePhotoBackpackLocator).should('be.visible');
});