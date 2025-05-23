import { GET_GREETING } from '../support/app.po';

describe('lda', () => {
  beforeEach(() => cy.visit('http://localhost:4200/tech'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    //cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    GET_GREETING().contains('LDA');

    cy.get('#navbarSupportedContent > ul > li:nth-child(1) > a').should('contain', 'Tech List');
  });
});
