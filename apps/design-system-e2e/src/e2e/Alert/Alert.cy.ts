describe('design-system: Alert component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=alert--primary'));

  it('표시', () => {
    cy.get('button').should('contain', '확인/수락');
    cy.get('button').should('contain', '닫기/취소');
  });
});
