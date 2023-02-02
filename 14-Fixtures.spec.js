/// <reference types="Cypress" />

describe("Testing of EA App", () => {
//section 2 - 14
    beforeEach("Call for a particular it block", () => {
        cy.visit("/");
        cy.fixture("eauser").as('user')
    })

    it("Performing Benefit check", () => {
        cy.get("#loginLink").invoke('text').as("linkText");
    
        cy.contains("Login").click()
        
        cy.get("@linkText").then(($x) => {
            expect($x).is.eql('Login');
        })
        
        cy.url().should("include","/Account/Login");

        cy.get("@user").then((user) => {
            cy.get('#UserName').type(user.UserName);
            cy.get('#Password').type(user.Password);
        })

        cy.get(".btn").click({force:true});

        cy.contains("Employee List").click();
        //table
        cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click();
            
        cy.get('.table').find('tr').as ('rows');
    })
})