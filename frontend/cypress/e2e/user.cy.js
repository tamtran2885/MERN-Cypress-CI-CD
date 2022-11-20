/// <reference types="cypress" />
const HomePage = require("../pageobjects/HomePage");

describe("Normal user test", () => {
  it("User visits home page", () => {
    HomePage.visit();
    cy.url().should("eq", "http://localhost:3000/");
    cy.title().should("eq", "My-Shopping");
  });
});
