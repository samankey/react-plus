import Alert from './Alert';

describe('Alert', () => {
  it('mount', () => {
    const confirmFn = cy.stub().as('confirm');
    const cancelFn = cy.stub().as('cancel');
    cy.mount(
      <Alert
        title="제목"
        content="내용"
        cancel="취소"
        confirm="확인"
        onCancel={(e) => {
          cancelFn();
        }}
        onConfirm={(e) => {
          confirmFn();
        }}
      />
    );
    cy.contains('확인').click();
    cy.get('@confirm').should('have.been.called');
    cy.contains('취소').click();
    cy.get('@cancel').should('have.been.called');
  });
});
