// https://on.cypress.io/api

describe("Form Builder Test", () => {
  it("visits the app root url", () => {
    cy.visit("http://localhost:5173");
    cy.contains("p", "No field added yet!! Please add your first field");
  });
});
