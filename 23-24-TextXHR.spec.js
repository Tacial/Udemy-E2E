/// <reference types="Cypress" />

describe("Test LambdaTest Website XHR", () => {

    before("Navigate to LambdaTest", () => {
        cy.visit("https://accounts.lambdatest.com/login");
    })

    it("Perform Login and verify XHR", () => {

        //Start the server
        cy.server();

        cy.route({
            method:'GET',
            url: '/api/user/organization/team'
        }).as('team');

        cy.route({
            method:'GET',
            url: '/api/user/organization/automation-test-sumary'
        }).as('apicheck');

        cy. fixture("lambdaUser").as("lambdauser");

        cy.get("@lambdauser").then((lambdauser) => {
            cy.get("#email").debug().type(lambdauser.UserName);
            cy.get("[name='password']").debug().type(lambdauser.Password, {log:false});
        })

        cy.get('#login-button').click();

        cy.get("@team").then((xhr) => {
            expect(xhr.status).to.eq(200);
            expect(xhr.response.body.data[0]).to.have.property("name","Karthik KK");
            expect(xhr.response.body.data[0]).to.have.property("role","Admin");
        })

        //traffic interseption - Explicit Assertion
        cy.get("@apicheck").then(function(xhr) {
            expect(xhr.status).to.eq(200);
            expect(xhr.response.body).to.have.property("maxQueue", 150);
        })

        //implicit assertion
        cy.get("@apicheck").its(response.body).should('have.property','maxQueue').and('eql', 150);
    })
})