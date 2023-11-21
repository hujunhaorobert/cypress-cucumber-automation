Feature: Magento Demo Store Search Functional Test
    Check Magento Demo Store Search Function

    Background: User visit Magento Demo Store home page
        Given InterceptHomePage flag is set to "OFF"
        And User visit Magento Demo Store home page
    Scenario Outline: User could search a product with multiple hits, and using "<realOrStubbed>" search response
        Then User type in product name e.g. "backpack" in the Search Bar, using "<realOrStubbed>" search response
        Then User see the search "backpack" results and validate the search result
        Examples:
            | realOrStubbed |
            | REAL          |
            | STUBBED       |

        
