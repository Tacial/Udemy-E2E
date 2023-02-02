/// <reference types="Cypress" />

describe("Testing of EA App", () => {
//section 2 - 15
    beforeEach("Call for a particular it block", () => {
        cy.visit("http://eaapp.somee.com/");
        cy.fixture("eauser").as('user');

        cy.get("@user").then((user) => {
            cy.login(user.UserName, user.Password);
        })
    })

    it("Performing Benefit check", () => {
        cy.contains("Employee List").click();
        //table
        cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click();
            
        cy.get('.table').find('tr').as ('rows');
    })
})