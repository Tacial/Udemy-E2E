/// <reference types="Cypress" />

describe("Testing of EA App", () => {
//section 2 - 11
    it("Login application", () => {
        //visiting website
        cy.visit("http://eaapp.somee.com/");

        cy.get("#loginLink").invoke('text').as("linkText");
        cy.contains("Login").click();

        cy.get("@linkText").then(($x) => {
            expect($x).is.eql('Login');
        })

        cy.url().should("include","/Account/Login");

        cy.get("#UserName"). type("admin");
        cy.get("#Password"). type("password");
        cy.get('.btn').click({force: true});

        cy.contains('Employee List').click()

        //Verify the value from a property
        cy.wrap({name:'Karthik'}).should('have.property','name').and('eq','Karthik');
        //Using Wrap
        cy.get('.table').find('tr > td').then(($td) => {
            cy.wrap($td).contains("John").invoke("wrap").parent().contains("Benefits").click();
        })
        
    })
})