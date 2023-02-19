// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
  cy.get('[class="ml-auto navbar-nav"] > [type="button"]').click();
  if (email) {
    cy.get("#mail").type(email);
  }
  if (password) {
    cy.get("#pass").type(password);
  }
  cy.get('[type="submit"]').click();
}),
  Cypress.Commands.add("upload", (type) => {
    if (type === "picture") {
      cy.get("#fileCover").selectFile("cypress/fixtures/picture.jpg");
    }
    if (type === "file") {
      cy.get("#fileBook").selectFile("cypress/fixtures/sample.pdf");
    }
  });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
