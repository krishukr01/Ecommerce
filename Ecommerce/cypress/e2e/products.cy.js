describe("product page", () => {
  const clearPrevCart = () => {
    cy.visit("/cart");
    cy.get("[data-test=cart_container]").find("[data-test=cart]");
    cy.visit("/products");
  };
  beforeEach(() => {
    cy.visit("/products");
  });

  const productContainer = () => cy.get("[data-test=products_container]");

  const AddToCartAndVerifyCount = (productIndex) => {
    productContainer()
      .find("[data-test=product_card]")
      .eq(productIndex)
      .find("[data-test=add_to_cart_button]")
      .click();
    cy.get("[data-test=cart_count]").should("have.text", `${++productIndex}`);
  };

  it("product page should exist and product should be present", () => {
    productContainer()
      .find("[data-test=product_card]")
      .should("exist")
      .should("be.length.greaterThan", 1);
  });

  it("should update the cart count accordingly for multiple products", () => {
    AddToCartAndVerifyCount(0);
    AddToCartAndVerifyCount(1);
    AddToCartAndVerifyCount(2);
    AddToCartAndVerifyCount(3);
    clearPrevCart();
  });
});
