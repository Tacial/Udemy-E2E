/// <reference types="Cypress" />

context("Test API from the Fake JSON Server", () => {

    beforeEach("DELETE before creating a new value", () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/posts/2'
        }).then((res) => {
            expect(x.body).to.be.empty
        })
    })

    it("Test GET functionality of JSON Server", () => {
        cy.request("http://localhost:3000/posts/1").its('body').should('have.property','id');
    })
    it.only("Test POST functionality of JSON Server", () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body: {
                "id": 2,
                "title": "Executeautomation",
                "author": "KarthikKK"
            }
        }).then((res) => {
            expect(res.body).has.property("title", "Executeautomation")
        })
    })
})

/*

npm install -g json-server

{
    "posts": [
        { "id": 1, "title": "json-server", "author": "typicode" }
    ],
    "commands": [
        { "id": 1, "body": "some comment", "postId": 1 }
    ],
    "profile": { "name": "typicode" }
}

json-server --watch db.json

*/