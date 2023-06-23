describe("test visit / ", () => {
  before(() => {
    cy.fixture("visit").as("visit");
  });
  it("get div id correct", () => {
    cy.get("@visit").then((visit: Record<string, any>) => {
      cy.visit("/");
      cy.get("div").should("have.id", visit.id);
    });
  });
});
