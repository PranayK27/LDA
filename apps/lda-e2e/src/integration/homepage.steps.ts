import{ Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Home page is visible", () => {
  cy.visit('http://localhost:4200/tech');
});

Then("I should see Tech List Header", () => {
  cy.get('#navbarSupportedContent > ul > li:nth-child(1) > a').should('contain', 'Tech List');
});
