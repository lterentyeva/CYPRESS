const { user, password } = require("../fixtures/example.json");
const { login } = require("../support/commands.js");

describe("Verify login in functional", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login(user, password);
  });

  it("Should add book", () => {
    cy.get('[type="button"][class="btn btn-warning"]').click();
    cy.get("#title").type("First book");
    cy.get("#description").type("Description of the book");
    cy.upload("picture");
    cy.upload("book");
    cy.get("#authors").type("Fedor Dostayevsky");
    cy.get('[type="submit"].btn-success').click();
    cy.contains("First book").should("be.visible");
  });

  it("Should add book to favorite", () => {
    cy.get('[class="card-footer"] .btn-success').first().click();
    cy.visit("/favorites");
    cy.contains("First book").should("be.visible");
  });

  it("Should delete book from favorite", () => {
    cy.visit("/favorites");
    cy.get('[class="card-footer"] .btn').first().click();
    cy.get(".btn > a").should("be.visible");
  });
});
