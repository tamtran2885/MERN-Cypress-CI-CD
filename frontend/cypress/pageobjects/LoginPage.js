class LoginPage {
  visit() {
    cy.visit("/login");
  }
}

module.exports = new LoginPage();
