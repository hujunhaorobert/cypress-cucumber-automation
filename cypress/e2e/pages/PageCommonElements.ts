class PageCommonElements {
    // Page header
    static readonly signInLinkUrl = "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/";
    static readonly createAnAccountLinkUrl = "https://magento.softwaretestingboard.com/customer/account/create/";
    static readonly warningMessageLocator = ".content > p";
    static readonly warningMessageText = "This is a demo store to test your test automaiton scripts. No orders will be fulfilled. If you are facing any issue, email us at hello@softwaretestingboard.com.";
    static readonly warningMessageTextCssStyles = "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box";

    static readonly clickWriteForUsLocator = "//span[contains(text(), 'Click “Write for us” link in the footer to submit a guest post')]";
    static readonly signInText = "//a[contains(text(), 'Sign In')]";
    static readonly createAnAccountText = "//a[contains(text(), 'Create an Account')]";
    static readonly storeLogoLocator = "[aria-label='store logo']";
    static readonly storeLogoImageLocator = "[aria-label='store logo'] img";
    static readonly storeLogoOriginalImageFile = "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/images/logo.svg";
    static readonly storeLogoOriginalLink = "https://magento.softwaretestingboard.com/";
    static readonly searchBoxLocator = "#search";
    static readonly searchBoxDefaultPlaceholder = "Search entire store here...";
    static readonly cartLocator = "[class='action showcart']";
    static readonly cartLink = "https://magento.softwaretestingboard.com/checkout/cart/";
    
    // Menu items
    static readonly whatsNewMenu = '//span[contains(text(), "What\'s New")]';
    static readonly womenMenu = "//span[contains(text(), 'Women')]";
    static readonly menMenu = "//span[contains(text(), 'Men')]";
    static readonly gearMenu = "//span[contains(text(), 'Gear')]";
    static readonly trainingMenu = "//span[contains(text(), 'Training')]";
    static readonly saleMenu = "//span[contains(text(), 'Sale')]";
    static readonly topsSubmenu = "//span[contains(text(), 'Tops')]";
    static readonly bottomsSubmenu = "//span[contains(text(), 'Bottoms')]";

    // Footer
    static readonly writeForUs = "//a[contains(text(),'Write for us')]";
    static readonly writeForUsLink = "https://softwaretestingboard.com/write-for-us/";
    static readonly subscribeToOurMailingList = "//a[contains(text(),'Subscribe to our mailing list')]";
    static readonly subscribeToOurMailingListLink = "https://softwaretestingboard.com/subscribe/";
    static readonly contactUs = "//a[contains(text(),'Contact us')]";
    static readonly contactUsLink = "https://softwaretestingboard.com/contact/";
    static readonly hireASoftwareTestingQACompany = "//a[contains(text(),'Hire a Sofware Testing/QA Company')]";
    static readonly hireASoftwareTestingQACompanyLink = "https://adeunqa.com";
    static readonly searchTerms = "//a[contains(text(),'Search Terms')]";
    static readonly searchTermsLink = "https://magento.softwaretestingboard.com/search/term/popular/";
    static readonly privacyAndCookiePolicy = "//a[contains(text(),'Privacy and Cookie Policy')]";
    static readonly privacyAndCookiePolicyLink = "https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode/";
    
    // Copyright
    static readonly copyrightLocator = ".copyright"
    static readonly copyrightText = "Copyright © 2013-present Magento, Inc. All rights reserved.";
}

export default PageCommonElements;
