describe("Navbar", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const navbar = () => cy.getByData("navbar");
  const mainContainer = () => cy.getByData("main-container");

  const clickNavLinkAndVerifyPath = (index, path) => {
    navbar().should("exist").find("a").eq(index).click();
    cy.location("pathname").should("eq", path);
  };

  it("navbar should exist", () => {
    navbar().should("exist");
  });

  it("link should work correctly and page should change accordingly", () => {
    clickNavLinkAndVerifyPath(0, "/");
    clickNavLinkAndVerifyPath(1, "/products");
    clickNavLinkAndVerifyPath(2, "/cart");
    clickNavLinkAndVerifyPath(3, "/login");
  });

  it("able to toggle theme and current theme should not change after refresh", () => {
    navbar().find("a").eq(4).click();
    mainContainer().should("have.class", "dark");
    cy.reload();
    mainContainer().should("have.class", "dark");
    navbar().find("a").eq(4).click();
    mainContainer().should("have.class", "light");
  });
});
