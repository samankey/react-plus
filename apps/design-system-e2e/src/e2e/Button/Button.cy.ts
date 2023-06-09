describe('design-system: Button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=button--primary'));

  it('표시', () => {
    cy.get('button').should('contain', 'Button');
  });
});
