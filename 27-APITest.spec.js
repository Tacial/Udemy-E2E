/// <reference types="Cypress" />

context("Test API from the Fake JSON Server", () => {

    it("API Testing", () => {

        cy.request({
            method: 'POST',
            url: 'http://eaapp.somee.com/Account/Login',
            body: {
                "UserName": "admin",
                "Password": "password",
                "RememberMe": "false"
            },
            failOnStatusCode: false
        }).then(($res) => {
            expect($res.status).to.eql(500);
            expect($res.body).to.contain('<i>The required anti-forgery cookie &quot;__RequestVerificationToken&quot; is not present.</i>');
        })
    })
})

/* npm install -g json-server
{
    "posts": [
        { "id": 1, "title": "json-server", "author": "typicode" }
    ],
    "commands": [
        { "id": 1, "body": "some comment", "postId": 1 }
    ],
    "profile": { "name": "typicode" }
}
json-server --watch db.json  */
