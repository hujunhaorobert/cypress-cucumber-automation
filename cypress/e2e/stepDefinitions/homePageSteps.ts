import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import DemoStoreHomePage from '../pages/DemoStoreHomePage';
import _ from "lodash";
import "cypress-xpath";
import "../../support/commands";

let interceptHomePageStatus = 'ON';

Given("InterceptHomePage flag is set to {string}", (interceptHomePage: ('ON'|'OFF') = 'OFF') => {
  interceptHomePageStatus = interceptHomePage;
})

When("User visit Magento Demo Store home page", () => {
  if (interceptHomePageStatus === 'ON') {
    cy.disableCache();
    const getMagentoDemoStoreHomePageUrl = 'https://magento.softwaretestingboard.com';
    const getMagentoHomePageMockFile = 'getMagentoDemoStoreHomePage.html';
    cy.interceptGetStaticResponse(getMagentoDemoStoreHomePageUrl, getMagentoHomePageMockFile).as('magentoHomePage');
  }
  cy.visit(DemoStoreHomePage.homePageUrl);
});

Then("Web land on the Demo Store home page", () => {
  if (interceptHomePageStatus === 'ON') {  
    cy.wait('@magentoHomePage').its('response.statusCode').should('eq', 200);
  }
  cy.title().should('eq', DemoStoreHomePage.homePageTitle);
  cy.url().should("contains", DemoStoreHomePage.homePageUrl);
  cy.log("Land on Magento Demo Store Home page");
});

Then("User see a Warning Message 'This is a demo store to test your test automation scripts' is highlighted", () => {
  cy.get(DemoStoreHomePage.warningMessageLocator)
    .should("exist")
    .contains(DemoStoreHomePage.warningMessageText)
    .should('have.css', 'Background', DemoStoreHomePage.warningMessageTextCssStyles); // Red background color as warning message
});

Then("User see 'Click Write for us link in the footer to submit a guest post'", () => {
  cy.xpath(DemoStoreHomePage.clickWriteForUsLocator).should("exist");
});

Then("User see 'Sign In', 'Create an Account' link text", () => {
  cy.xpath(DemoStoreHomePage.signInText).should("exist")
    .should('have.attr', 'href')
    .and('equal', DemoStoreHomePage.signInLinkUrl);
  cy.xpath(DemoStoreHomePage.createAnAccountText).should("exist")
    .should('have.attr', 'href')
    .and('equal', DemoStoreHomePage.createAnAccountLinkUrl);

});


Then("User see LUMA LOGO, Search box and 'Cart' ICON", () => {
  cy.get(DemoStoreHomePage.storeLogoImageLocator)
    .should('be.visible')
    .should('have.attr', 'src') // yields the "src" attribute
    .and('equal', DemoStoreHomePage.storeLogoOriginalImageFile)
  cy.get(DemoStoreHomePage.storeLogoLocator)
    .should('be.visible')  
    .should('have.attr', 'href') // yields the "href" attribute
    .and('equal', DemoStoreHomePage.storeLogoOriginalLink);
  cy.get(DemoStoreHomePage.searchBoxLocator)
    .should('be.visible')  
    .should('have.attr', 'placeholder') // yields the "placeholder" attribute
    .and('equal', DemoStoreHomePage.searchBoxDefaultPlaceholder);
  cy.get(DemoStoreHomePage.cartLocator)
    .should('be.visible')
    .should('have.attr', 'href', DemoStoreHomePage.cartLink)
    .get('.counter-number').should('have.text', '');
});

Then("User see 'What's New', 'Women', 'Men', 'Gear', 'Training', 'Sale' menu", () => {
  cy.xpath(DemoStoreHomePage.whatsNewMenu).should("exist");
  cy.xpath(DemoStoreHomePage.womenMenu).should("exist");
  cy.xpath(DemoStoreHomePage.menMenu).should("exist");
  cy.xpath(DemoStoreHomePage.gearMenu).should("exist");
  cy.xpath(DemoStoreHomePage.trainingMenu).should("exist");
  cy.xpath(DemoStoreHomePage.saleMenu).should("exist");
});

Then("User mouse hover to LUMA menu items to browser the avaliable services", (table: any) => {
  for (const row of table.hashes()) {
    const menuItem = _.camelCase(row.menuItem);
    cy.xpath(DemoStoreHomePage[`${menuItem}Menu`]).trigger('mouseover');
    cy.wait(200); // Add wait 200ms so that user can observe UI changes during hovering, could be disabled  
  }
});

Then("User mouse hover to {string} submenu items to browser the avaliable services", (menuItem: string, table: any) => {
    const parentMenuItem = _.camelCase(menuItem);
    cy.xpath(DemoStoreHomePage[`${parentMenuItem}Menu`]).trigger('mouseover');
    cy.wait(100); // Add wait so that user can observe UI changes during hovering, could be disabled  
    for (const row of table.hashes()) {
      const submenuItem = _.camelCase(row.menuItem);
      if(parentMenuItem === "women") {
        cy.xpath(DemoStoreHomePage[`${submenuItem}Submenu`]).first().trigger('mouseover');
      } else if(parentMenuItem === "men") {
        cy.xpath(DemoStoreHomePage[`${submenuItem}Submenu`]).last().trigger('mouseover');
      }
      cy.wait(200); // Add wait so that user can observe UI changes during hovering, could be disabled  
    }
});

Then("User see page footer content displayed", () => {
  cy.xpath(DemoStoreHomePage.writeForUs).should("exist")
    .should('be.visible')
    .should('have.attr', 'href', DemoStoreHomePage.writeForUsLink);
  cy.xpath(DemoStoreHomePage.subscribeToOurMailingList).should("exist")
    .should('be.visible')
    .should('have.attr', 'href', DemoStoreHomePage.subscribeToOurMailingListLink);
  cy.xpath(DemoStoreHomePage.contactUs).should("exist")
    .should('be.visible')
    .should('have.attr', 'href', DemoStoreHomePage.contactUsLink);
  cy.xpath(DemoStoreHomePage.hireASoftwareTestingQACompany).should("exist")
    .should('be.visible')
    .should('have.attr', 'href', DemoStoreHomePage.hireASoftwareTestingQACompanyLink);
  cy.xpath(DemoStoreHomePage.searchTerms).should("exist")
    .should('be.visible')
    .should('have.attr', 'href', DemoStoreHomePage.searchTermsLink);
  cy.xpath(DemoStoreHomePage.privacyAndCookiePolicy).should("exist")
    .should('be.visible')
    .should('have.attr', 'href', DemoStoreHomePage.privacyAndCookiePolicyLink);
});

Then("User see page copyright content displayed", () => {
  cy.get(DemoStoreHomePage.copyrightLocator).should("exist")
    .should('be.visible')
    .find('span')
    .should('have.text', DemoStoreHomePage.copyrightText);
});