// import { fireEvent, screen, render } from '@testing-library/react';
// import Alert from './Alert';

// function getAlertComponent(props: Parameters<typeof Alert>[0]) {
//   return (
//     <div data-testid="alert">
//       <Alert {...props} />
//     </div>
//   );
// }
// describe('Alert', () => {
//   it('렌더 및 기본 테스트', () => {
//     const { baseElement } = render(
//       getAlertComponent({
//         title: '경고',
//         content: '내용',
//         cancel: '취소',
//         confirm: '확인',
//         onCancel: (e) => {},
//         onConfirm: (e) => {},
//       })
//     );

//     expect(baseElement).toBeTruthy();
//     expect(baseElement).toHaveTextContent('경고');
//     expect(baseElement).toHaveTextContent('내용');
//     expect(baseElement).toHaveTextContent('취소');
//     expect(baseElement).toHaveTextContent('확인');
//   });
//   it('변경 테스트', () => {
//     const { baseElement, rerender } = render(
//       getAlertComponent({
//         title: '경고',
//         content: '내용',
//         cancel: '취소',
//         confirm: '확인',
//         onCancel: (e) => {},
//         onConfirm: (e) => {},
//       })
//     );

//     expect(baseElement).toBeTruthy();
//     expect(baseElement).toHaveTextContent('경고');
//     expect(baseElement).toHaveTextContent('내용');
//     expect(baseElement).toHaveTextContent('취소');
//     expect(baseElement).toHaveTextContent('확인');
//     // 다른 props로 다시 렌더
//     rerender(
//       getAlertComponent({
//         title: '오류',
//         content: '에러메시지',
//         cancel: '닫기',
//         confirm: '완료',
//         onCancel: (e) => {},
//         onConfirm: (e) => {},
//       })
//     );

//     expect(baseElement).toBeTruthy();
//     expect(baseElement).toHaveTextContent('오류');
//     expect(baseElement).toHaveTextContent('에러메시지');
//     expect(baseElement).toHaveTextContent('닫기');
//     expect(baseElement).toHaveTextContent('완료');
//   });
//   it('클릭 테스트', () => {
//     const mockOnCancel = jest.fn();
//     const mockOnConfirm = jest.fn();
//     render(
//       getAlertComponent({
//         title: '경고',
//         content: '내용',
//         cancel: '취소',
//         confirm: '확인',
//         onCancel: (e) => mockOnCancel(),
//         onConfirm: (e) => mockOnConfirm(),
//       })
//     );

//     // 확인 버튼 클릭
//     fireEvent.click(screen.getByText('확인'));
//     expect(mockOnConfirm).toHaveBeenCalledTimes(1);

//     // 취소 버튼 클릭
//     fireEvent.click(screen.getByText('취소'));
//     expect(mockOnCancel).toHaveBeenCalledTimes(1);
//   });
// });
