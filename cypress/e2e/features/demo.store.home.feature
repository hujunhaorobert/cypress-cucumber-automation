Feature: Magento Demo Store Home Page
    Check Magento Demo Store Home Page integrity.

    Background: User visit Magento Demo Store home page
        
    Scenario Outline: When InterceptHomePage flag is set to <InterceptHomePage>, user could see Magento Demo Store home page loads successfully and contains all expected elements
        Given InterceptHomePage flag is set to "<InterceptHomePage>"
        When User visit Magento Demo Store home page
        Then Web land on the Demo Store home page
        Then User see a Warning Message 'This is a demo store to test your test automation scripts' is highlighted
        Then User see 'Click Write for us link in the footer to submit a guest post' 
        Then User see 'Sign In', 'Create an Account' link text
        Then User see LUMA LOGO, Search box and 'Cart' ICON
        Then User see 'What's New', 'Women', 'Men', 'Gear', 'Training', 'Sale' menu  
        Then User mouse hover to LUMA menu items to browser the avaliable services
            | menuItem      | avaliableSubMenu |
            | Women         | Tops, Bottoms    |
            | Men           | Tops, Bottoms    |
            | Gear          | Bags, Fitness Equipment, Watches |
            | Training      | Video Download   |
        Then User mouse hover to "Women" submenu items to browser the avaliable services
            | menuItem      | avaliableSubMenu |
            | Tops          | Jackets, Hoodies & Sweetshirts, Tees, Bras & Tanks    |
            | Bottoms       | Pants, Shorts    |
        Then User mouse hover to "Men" submenu items to browser the avaliable services
            | menuItem      | avaliableSubMenu |
            | Tops          | Jackets, Hoodies & Sweetshirts, Tees, Tanks    |
            | Bottoms       | Pants, Shorts    |
        # Then User see block promo items(picture and content) displayed
        And User see page footer content displayed
        And User see page copyright content displayed
        Examples:
            | InterceptHomePage |
            | OFF               |
            | ON                |
