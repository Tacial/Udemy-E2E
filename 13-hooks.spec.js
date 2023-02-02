/// <reference types="Cypress" />

describe("Testing of EA App", () => {
//section 2 - 13

    //in the video, use Before but is not ok in this version
    beforeEach("Call for a particular it block", () => {
        //visiting website
        cy.visit("http://www.executeautomation.com/site");
    })

    it("Login application", () => {
        //the site changed - this test doesn't work
        cy.get("[aria-label='jump to slide 2'",{timeout:60000}).should('have.class','ls-nav-active');

        cy.get("[aria-label='jumo to slide 2'",{timeout:60000}).should(($x) => {
            expect($x).to.have.class('ls-nav-active');
        })
    })
    it("Testing EA Site for assertion with hooks", () => {
        
        //explicit assertions
        cy.get("[aria-label='jump to slide 2'",{timeout:60000}).should(($x) => {
            expect($x).to.not.be.null;
        })
    })
})