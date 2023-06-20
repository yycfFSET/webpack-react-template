describe("test query yycf", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("div").should("have.id", "root");
  });
});
