import { beforeEach, cy, describe, it } from "local-cypress";

describe("Index Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Headers should exist", () => {
    cy.get("h1").should("contain", "One Piece");
    cy.get("h2").should("contain", "Notorious Pirate Groups");
  });
  it("Pirate Group CardList should exist", () => {
    cy.get("#cardList").should("be.visible");
  });

  it("CardList should have 3 pirate groups", () => {
    cy.get("#cardList").children().should("have.length", 3);
  });

  it("CardList first child should be Heart Pirates", () => {
    cy.get("#cardList").children().first().should("have.text", "HeartBerri 35000000");
  });

  it("CardList last child should be Straw Hat Pirates", () => {
    cy.get("#cardList").children().last().should("have.text", "Straw HatBerri 60000000");
  });

  it("Straw Hat Pirates listing page should be accessible", () => {
    cy.get("#cardList").children().last().click();
    cy.get("#memberList").children().should("have.length", 8);
  });
});
