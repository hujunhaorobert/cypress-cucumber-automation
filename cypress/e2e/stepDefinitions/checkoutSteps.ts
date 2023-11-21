import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import _ from "lodash";
import "cypress-xpath";
import "../../support/commands";
import DemoStoreSearchPage from "../pages/DemoStoreSearchPage";
import DemoStoreCheckoutPage from "../pages/DemoStoreCheckoutPage";
import faker from "faker";

Then("User click 'Driven Backpack' image and check details", () => {
  cy.get(DemoStoreSearchPage.productImagePhotoBackpackLocator).click();
  cy.url().should('contains', DemoStoreSearchPage.drivenBackpackUrl);
  cy.get(DemoStoreSearchPage.drivenBackpackPrice).should('have.text', "$36.00");
  cy.get(DemoStoreSearchPage.drivenBackpackStockSku).should('have.text', "In stock");
  cy.get(DemoStoreSearchPage.drivenBackpackQty)
    .should('have.attr', "title").and('equal', 'Qty');
  cy.get(DemoStoreSearchPage.drivenBackpackQty)
    .should('have.attr', "value").and('equal', '1');
  cy.get(DemoStoreSearchPage.addToCartButton).should('be.visible');  
});

Then("User click 'Add to Cart' button", () => {
  cy.get(DemoStoreSearchPage.addToCartButton).click();
  // cy.get(DemoStoreSearchPage.addToCartButton, {timeout: 10000}).click();
});

Then("User see add to shopping cart successful message and cart number updated", () => {
  cy.get(DemoStoreSearchPage.messageSuccessLocator).should('have.text', DemoStoreSearchPage.messageSuccessText);
  // cy.get(DemoStoreSearchPage.messageSuccessLocator, {timeout: 10000}).should('have.text', DemoStoreSearchPage.messageSuccessText);
  cy.get(DemoStoreSearchPage.showCartCounter).should('have.text', '1');
});

Then("User click shopping cart link", () => {
  cy.contains('shopping cart')
    .trigger('mouseover')
    .click({ force: true });
});

Then("User click 'Proceed to Checkout'", () => {
  // Below(set wait 10s) is a workaround to wait all XHR requests
  // ready in the backend to avoid test flaky, definitly it
  // could be improved by query all target XHR return RC=200, or other approaches.
  // Or else, click the proceedToCheckoutButton will not really work as expected
  cy.wait(10000); 
  cy.get(DemoStoreSearchPage.proceedToCheckoutButton).click();
});

Then("User see the App jumps to checkout page", () => {
  cy.url().should('contains',DemoStoreCheckoutPage.checkoutShippinglUrl);
});

Then("User fill in Shipping Address", () => {
  const emailAddress = faker.internet.email();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const streetAddress = faker.address.streetAddress(true) ;
  cy.get(DemoStoreCheckoutPage.emailAddressBox).type(emailAddress, { force: true });
  cy.get(DemoStoreCheckoutPage.firstNameBox).type(firstName, { force: true });
  cy.get(DemoStoreCheckoutPage.lastNameBox).type(lastName, { force: true });
  cy.get(DemoStoreCheckoutPage.streetAddressBox0).type(streetAddress, { force: true });
  cy.get(DemoStoreCheckoutPage.countrySelectBox).select("Australia");
  cy.get(DemoStoreCheckoutPage.stateProvinceSelectBox).select("New South Wales");
  cy.get(DemoStoreCheckoutPage.cityBox).type("Gordon");
  cy.get(DemoStoreCheckoutPage.zipCodeBox).type("2072");
  cy.get(DemoStoreCheckoutPage.phoneNumberBox).type("0433034543", { force: true });
  cy.get(DemoStoreCheckoutPage.flatRateRadioLocator).check('flatrate_flatrate');
});

Then("User click Next button", () => {
  cy.get(DemoStoreCheckoutPage.submitButton).click();
})

Then("User see the App move forward to Review & Payments", () => {
  cy.url().should('contains', DemoStoreCheckoutPage.checkoutPaymentlUrl);
  cy.get(DemoStoreCheckoutPage.reviewAndPaymentsTextLocator).should('have.text', "Review & Payments");
})

Then("User click the 'My billing and shipping address are the same' checkbox", () => {
  cy.get(DemoStoreCheckoutPage.myBillingAndShippingAddressAreSameCheckbox).check();
})

Then("User click the 'Place Order' button", () => {
  cy.get(DemoStoreCheckoutPage.placeOrederButton).click();
})

Then("User see 'Thank you for your purchase!'", () => {
  cy.xpath(DemoStoreCheckoutPage.thankYouForYourPurchaseTextLocator).should('be.visible');
  cy.url().should('contains', DemoStoreCheckoutPage.checkoutSuccessfulUrl);
})