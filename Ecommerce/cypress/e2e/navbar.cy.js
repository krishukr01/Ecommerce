describe("Navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("navbar should be exist", () => {
    cy.getByData("navbar").should("exist");
  });

  it("link should work correctly and page should change be accordingly", () => {
    // todo : how to avoid code  repetition here
    cy.getByData("navbar").should("exist").find("a").eq(0).click();
    cy.location("pathname").should("eq", "/");
    cy.getByData("navbar").should("exist").find("a").eq(1).click();
    cy.location("pathname").should("eq", "/products");
    cy.getByData("navbar").should("exist").find("a").eq(2).click();
    cy.location("pathname").should("eq", "/cart");
    cy.getByData("navbar").should("exist").find("a").eq(3).click();
    cy.location("pathname").should("eq", "/login");
  });

  it("able to toggle theme and current theme should not change after refresh", () => {
    cy.getByData("navbar").should("exist").find("a").eq(4).click();
    cy.getByData("main-container").should("have.class", "dark");
    cy.reload();
    cy.getByData("main-container").should("have.class", "dark");
    cy.getByData("navbar").should("exist").find("a").eq(4).click();
    cy.getByData("main-container").should("have.class", "light");
  });
});
