describe("nibo.sh page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays Scrapbox link", () => {
    cy.get('[data-cy="link-scrapbox"]').should(
      "have.attr",
      "href",
      "https://scrapbox.io/niboshi/niboshi"
    );
  });

  it("displays Twitter link", () => {
    cy.get('[data-cy="link-twitter"]').should(
      "have.attr",
      "href",
      "https://twitter.com/mpppk"
    );
  });

  it("displays GitHub link", () => {
    cy.get('[data-cy="link-github"]').should(
      "have.attr",
      "href",
      "https://github.com/mpppk"
    );
  });

  it("displays _pay link", () => {
    cy.get('[data-cy="link-pay"]')
      .click()
      .get("h1")
      .should("have.text", "_pay");
  });
});
