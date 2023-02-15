/// <reference types="Cypress" />

describe("Testing of EA App", () => {

    it("Login application", () => {
        //visiting website
        cy.visit("http://eaapp.somee.com/");

        cy.contains("Login").then(($link) => {
            const linkText = $link.text();
            expect(linkText).is.eql('Login');
        }).click();

        /* cy.get("#loginLink").then(($link) => {
            const linkText = $link.text();
            expect(linkText)is.eql('Login);
        }).click();  */

        cy.url().should("include","/Account/Login");

        cy.get("#UserName"). type("admin");
        cy.get("#Password"). type("password");
        cy.get('.btn').click({force: true});

        //click Employee list
        cy.contains('Employee List').click()

        //table
        cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click()
    })
})
