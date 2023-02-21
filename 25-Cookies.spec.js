/// <reference types="Cypress" />

describe("Test LambdaTest cookies", () => {

    before("Navigate to LambdaTest", () => {
        cy.visit("https://accounts.lambdatest.com/login");
    })

    it("Test LambdaTest cookies", () => {

        cy. fixture("lambdaUser").as("lambdauser");

        cy.get("@lambdauser").then((lambdauser) => {
            cy.get("#email").debug().type(lambdauser.UserName);
            cy.get("[name='password']").debug().type(lambdauser.Password, {log:false});
        })

        cy.get('#login-button').click();

        cy.getCookie('user_id').should('have.property','41224')
   })
})