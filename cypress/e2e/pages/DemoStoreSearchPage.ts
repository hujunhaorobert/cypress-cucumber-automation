import PageCommonElements from "./PageCommonElements";

class DemoStoreSearchPage extends PageCommonElements  {
    static readonly drivenBackpackUrl = "https://magento.softwaretestingboard.com/driven-backpack.html";
    static readonly pageTitleWrapperLocator = "[data-ui-id='page-title-wrapper']";
    static readonly compareProductsLocator = "#block-compare-heading";
    static readonly myWishListLocator = "//strong[contains(text(), 'My Wish List')]";
    static readonly totalAmountLocator = "#toolbar-amount";
    static readonly productImagePhotoBackpackLocator = ".product-image-photo[alt='Driven Backpack']";
    static readonly productItemDrivenBackpackLink = "//a[contains(text(), 'Driven Backpack')]";
    static readonly drivenBackpackPrice = ".product-info-price .price";
    static readonly drivenBackpackStockSku = ".product-info-stock-sku span";
    static readonly drivenBackpackQty = "#qty";
    static readonly addToCartButton = "#product-addtocart-button";
    static readonly messageSuccessLocator = ".message-success > div";
    static readonly messageSuccessText = 'You added Driven Backpack to your shopping cart.';
    static readonly showCartCounter = '.counter-number';
    static readonly miniCartWrapper= '.minicart-wrapper';
    // static readonly proceedToCheckoutButton= '#top-cart-btn-checkout';
    static readonly proceedToCheckoutButton= ".item button[title='Proceed to Checkout']";
    static readonly viewAndEditCartButton= "//a[contains(text(), 'View and Edit Cart')]";
    static readonly shoppingCartLink= "//a[contains(text(), 'shopping cart')]";
}

export default DemoStoreSearchPage;
