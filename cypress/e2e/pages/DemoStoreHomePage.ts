import PageCommonElements from "./PageCommonElements";

class DemoStoreHomePage extends PageCommonElements {
    // URL
    static readonly homePageUrl = "https://magento.softwaretestingboard.com/";

    // Locator
    static readonly homePageTitle = "Home Page";
    static readonly searchAutoCompleteListLocator = "#search_autocomplete";
    static readonly searchAutoCompleteOptionsLocator = ".qs-option-name";
}

export default DemoStoreHomePage;
