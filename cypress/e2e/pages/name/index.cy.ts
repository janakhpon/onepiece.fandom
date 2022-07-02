import { beforeEach, cy, describe, it } from "local-cypress";

describe("Pirate Group Listing Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Straw_Hat");
  });

  it("Headers should exist", () => {
    cy.get("h1").should("contain", "One Piece");
    cy.get("h2").should("contain", "Straw Hat Pirates");
  });
  it("Pirate Member CardList should exist", () => {
    cy.get("#memberList").children().should("have.length", 8);
  });

  it("Ascending/CardList first child should be Brook", () => {
    cy.get("#memberList").children().first().find('a').should('have.attr', 'href', '/Straw_Hat/Brook')
  });

  it("Ascending/CardList last child should be Sanji", () => {
    cy.get("#memberList").children().last().find('a').should('have.attr', 'href', '/Straw_Hat/Sanji')
  });

  it("Frist Child/Brook Profile should be accessible", () => {
    cy.get("#memberList").children().first().click();
    cy.get("h1").should("contain", "Brook");
  });
});
