/// <reference types="cypress" />

describe("API Users test", () => {
  it("Create new user", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:5000/users/signup",
      body: {
        name: "test automation",
        email: "example5@gmail.name",
        password: "123456",
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(200);
      expect(res.body).has.property("email", "example5@gmail.name");
    });
  });
});
