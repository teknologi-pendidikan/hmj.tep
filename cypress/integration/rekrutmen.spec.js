describe("Check the Rekrutmen Pages", () => {
  it("Check Titles", () => {
    cy.visit("http://localhost:3000/rekrutmen");
    cy.get("h1").contains("Rekrutmen HMJ TEP UM");
  });
});
