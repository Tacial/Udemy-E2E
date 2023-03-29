/// <reference types="Cypress" />

describe("Testing of EA App", () => {
//section 2 - 12
    it("Login application", () => {
        //visiting website
        cy.visit("http://www.executeautomation.com/site");

        cy.get("[aria-label='jump to slide 2'",{timeout:60000}).should('have.class','ls-nav-active');

        cy.get("[aria-label='jumo to slide 2'",{timeout:60000}).should(($x) => {
            expect($x).to.have.class('ls-nav-active');
        })
    })
    it.only("Login application", () => {
        //visiting website
        cy.visit("http://www.executeautomation.com/site");
        cy.get("[aria-label='jump to slide 2'",{timeout:60000}).should(($x) => {
            expect($x).to.not.be.null;
        })
    })
})
