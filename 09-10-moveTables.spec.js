/// <reference types="Cypress" />

describe("Testing of EA App", () => {

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

        //click Employee list
        cy.contains('Employee List').click()

        //table
        cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click()
        
        cy.get('.table').find('tr').as("rows");

        //click all the text fields -> section 2 - 10
        cy.get("@rows").then(($row) => {
            cy.wrap($row).click({multiple:true});
        })
    })
})
