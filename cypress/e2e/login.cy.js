const { user, password } = require("../fixtures/example.json");
const { login } = require("../support/commands.js");

describe("Verify log in functional", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should log in with valid credentials", () => {
    cy.login(user, password);
    cy.contains(user).should("be.visible");
    cy.contains("Add new").should("have.class", "btn");
  });

  it("Should not log in when login is empty", () => {
    cy.login("", password);
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

  it("Should not log in when password is empty", () => {
    cy.login(user, "");
    cy.get("#pass")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
});
