/// <reference types="cypress" />

describe("API Users test", () => {
  it("Create new user", () => {
    cy.request({
      method: "POST",
      url: "/users/signup",
      body: {
        name: "user",
        email: "user@gmail.com",
        password: "123456",
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(200);
      expect(res.body).has.property("email", "user@gmail.com");
    });
  });

  it("User login successfully", () => {
    cy.request({
      method: "POST",
      url: "/users/login",
      body: {
        email: "user@gmail.com",
        password: "123456",
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(200);
      expect(res.body).has.property("email", "user@gmail.com");
    });
  });
});
