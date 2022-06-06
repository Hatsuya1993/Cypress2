import {HomePagePOM} from './PageObject/HomePagePOM'

interface listOfSrc {
    src : Array<string>
}

let dataOfSrc : listOfSrc = {
    src : ["[src='./images/broccoli.jpg']", "[src='./images/cauliflower.jpg']", "[src='./images/cucumber.jpg']", "[src='./images/cucumber.jpg']", "[src='./images/beetroot.jpg']", "[src='./images/carrots.jpg']", "[src='./images/tomato.jpg']", "[src='./images/beans.jpg']", "[src='./images/brinjal.jpg']", "[src='./images/capsicum.jpg']", "[src='./images/button-mushroom.jpg']", "[src='./images/potato.jpg']", "[src='./images/pumpkin.jpg']", "[src='./images/corn.jpg']", "[src='./images/onion.jpg']", "[src='./images/apple.jpg']", ""]
}

describe('Home Page Test', () => { 

    let homePagePOM : HomePagePOM

    beforeEach(() => {
        homePagePOM = new HomePagePOM()
        homePagePOM.navigateTo()
    })

    it('URL should contain the correct details', () => {
        cy.url().should('contain', 'https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('Title should be displayed', () => {
        homePagePOM.getTitle().should("be.visible")
    })

    it('Title should be displayed correctly', () => {
        homePagePOM.getTitle().should('have.text', 'GREENKART')
    })

    it('Search input should be displayed', () => {
        homePagePOM.getSearchInput().should('be.visible')
    })

    it('Top deals should bed displayed', () => {
        homePagePOM.getTopDeals().should('be.visible')
    })

    it('Top deals should be displayed correctly', () => {
        homePagePOM.getTopDeals().should('have.text', 'Top Deals')
    })

    it('Flight booking should be displayed', () => {
        homePagePOM.getFlightBooking().should('be.visible')
    })

    it('Flight booking should be dispalyed correctly', () => {
        homePagePOM.getFlightBooking().should('have.text', 'Flight Booking')
    })

    it('Shopping bag should be displayed', () => {
        homePagePOM.getShoppingBag().should('be.visible')
    })

    it('Blinking text should be displayed', () => {
        homePagePOM.getBlinkingText().should('be.visible')
    })

    it('Blinking text should be displayed correctly', () => {
        homePagePOM.getBlinkingText().should('have.text', 'Free Access to InterviewQues/ResumeAssistance/Material')
    })

    it('Products should be displayed', () => {
        homePagePOM.getProducts().should('be.visible')
    })

    it('Number of products should be correct', () => {
        homePagePOM.getListOfProducts().should('have.length', 30)
    })

 })