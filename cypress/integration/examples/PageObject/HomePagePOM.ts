interface cssText {
    class : string,
    text: string
}

export class HomePagePOM {

    private readonly link : string = "/"
    private readonly title : cssText = {
        class : ".brand.greenLogo",
        text : "GREENKART"
    }
    private readonly searchInput : string = ".search-form"
    private readonly topDeals : cssText = {
        class : ".cart-header-navlink",
        text : "Top Deals"
    }
    private  readonly flightBooking : cssText = {
        class : ".cart-header-navlink",
        text : "Flight Booking"
    }
    private readonly shoppingBag : string = "[src='https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png']"
    private readonly blinkingText : string = ".cart-header-navlink.blinkingText"
    private readonly products : string = ".products"
    private readonly listOfProducts : string = ".products .product"

    navigateTo() {
        cy.visit(this.link)
    }

    getTitle() {
        return cy.get(this.title.class).contains(this.title.text)
    }

    getSearchInput() {
        return cy.get(this.searchInput)
    }

    getTopDeals() {
        return cy.get(this.topDeals.class).contains(this.topDeals.text)
    }

    getFlightBooking() {
        return cy.get(this.flightBooking.class).contains(this.flightBooking.text)
    }

    getShoppingBag() {
        return cy.get(this.shoppingBag)
    }

    getBlinkingText() {
        return cy.get(this.blinkingText)
    }

    getProducts() {
        return cy.get(this.products)
    }

    getListOfProducts() {
        return cy.get(this.listOfProducts)
    }

}