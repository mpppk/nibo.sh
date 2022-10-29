import { urls } from "../../src/const";

describe("nibo.sh page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays Scrapbox link", () => {
    cy.get('[data-cy="link-scrapbox"]').should(
      "have.attr",
      "href",
      urls.scrapbox
    );
  });

  it("displays Twitter link", () => {
    cy.get('[data-cy="link-twitter"]').should(
      "have.attr",
      "href",
      urls.twitter
    );
  });

  it("displays GitHub link", () => {
    cy.get('[data-cy="link-github"]').should("have.attr", "href", urls.github);
  });

  it("displays _pay link", () => {
    cy.get('[data-cy="link-pay"]').should("have.attr", "href", urls.pay);
  });
});
