"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePagePOM = void 0;
class HomePagePOM {
    constructor() {
        this.link = "/";
        this.title = {
            class: ".brand.greenLogo",
            text: "GREENKART"
        };
        this.searchInput = ".search-form";
        this.topDeals = {
            class: ".cart-header-navlink",
            text: "Top Deals"
        };
        this.flightBooking = {
            class: ".cart-header-navlink",
            text: "Flight Booking"
        };
        this.shoppingBag = "[src='https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png']";
        this.blinkingText = ".cart-header-navlink.blinkingText";
        this.products = ".products";
        this.listOfProducts = ".products .product";
    }
    navigateTo() {
        cy.visit(this.link);
    }
    getTitle() {
        return cy.get(this.title.class).contains(this.title.text);
    }
    getSearchInput() {
        return cy.get(this.searchInput);
    }
    getTopDeals() {
        return cy.get(this.topDeals.class).contains(this.topDeals.text);
    }
    getFlightBooking() {
        return cy.get(this.flightBooking.class).contains(this.flightBooking.text);
    }
    getShoppingBag() {
        return cy.get(this.shoppingBag);
    }
    getBlinkingText() {
        return cy.get(this.blinkingText);
    }
    getProducts() {
        return cy.get(this.products);
    }
    getListOfProducts() {
        return cy.get(this.listOfProducts);
    }
}
exports.HomePagePOM = HomePagePOM;
