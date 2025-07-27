describe('sample test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the volunteer heading', () => {
    cy.get('h1').contains('Devenir bénévole ?');
  });
  it('renders the Netlify logo image', () => {
    cy.get('img')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});
