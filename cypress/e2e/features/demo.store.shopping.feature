Feature: Demo user shopping journey E2E test (search, check out)
    Check Magento Demo Store Shopping features

    Background: User visit Magento Demo Store home page
        Given InterceptHomePage flag is set to "OFF"
        And User visit Magento Demo Store home page
    @smoke 
    Scenario: Happy path - User could search a product, go through the purchase procedure and buy it successfully
        Then User type in product name e.g. "backpack" in the Search Bar, using "<realOrStubbed>" search response
        Then User see the search "backpack" results and validate the search result
        Then User click 'Driven Backpack' image and check details
        Then User click 'Add to Cart' button
        Then User see add to shopping cart successful message and cart number updated
        Then User click shopping cart link
        Then User click 'Proceed to Checkout'
        Then User see the App jumps to checkout page
        Then User fill in Shipping Address
        Then User click Next button
        Then User see the App move forward to Review & Payments
        Then User click the 'My billing and shipping address are the same' checkbox
        Then User click the 'Place Order' button
        Then User see 'Thank you for your purchase!'
     
