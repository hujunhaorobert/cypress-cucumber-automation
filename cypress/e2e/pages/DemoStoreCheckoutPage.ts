import PageCommonElements from "./PageCommonElements";

class DemoStoreCheckoutPage extends PageCommonElements  {
    // URL const
    static readonly checkoutShippinglUrl = 'https://magento.softwaretestingboard.com/checkout/#shipping';
    static readonly checkoutPaymentlUrl = 'https://magento.softwaretestingboard.com/checkout/#payment';
    static readonly checkoutSuccessfulUrl = 'https://magento.softwaretestingboard.com/checkout/onepage/success/';

    // Locator 
    static readonly emailAddressBox = "#customer-email-fieldset #customer-email";
    static readonly firstNameBox = "input[name='firstname']";
    static readonly lastNameBox = "input[name='lastname']";
    static readonly streetAddressBox0 = "input[name='street[0]']";
    static readonly cityBox = "input[name='city']";
    static readonly countrySelectBox = "[name='shippingAddress.country_id'] select";
    static readonly stateProvinceSelectBox = "[name='shippingAddress.region_id'] select";
    static readonly zipCodeBox = "input[name='postcode']";
    static readonly phoneNumberBox = "input[name='telephone']";
    static readonly submitButton = "#shipping-method-buttons-container button[type='submit']";
    static readonly reviewAndPaymentsTextLocator = "._active > span";
    static readonly placeOrederButton = "button[title='Place Order']";
    static readonly thankYouForYourPurchaseTextLocator = "//span[contains(text(), 'Thank you for your purchase!')]";
    static readonly flatRateRadioLocator = "[type='radio']";
    static readonly myBillingAndShippingAddressAreSameCheckbox = "#billing-address-same-as-shipping-checkmo";
}

export default DemoStoreCheckoutPage;
