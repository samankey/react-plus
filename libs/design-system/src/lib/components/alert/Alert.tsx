// import {
//   AlertDialogButonStyle,
//   AlertDialogButtonGroupWrapperStyle,
//   AlertDialogContentStyle,
//   AlertDialogHeaderStyle,
//   AlertDialogTitleStyle,
//   AlertDialogWrapperStyle,
//   alertDialogConfirmButtonStyle,
// } from './Alert.css';

// export function Alert({
//   title,
//   content,
//   cancel,
//   onCancel,
//   confirm,
//   onConfirm,
// }: {
//   /**
//    * 경고창 제목
//    */
//   title: string;
//   /**
//    * 경고창 내용
//    */
//   content: string;
//   /**
//    * 취소버튼 내용
//    */
//   cancel: string;
//   /**
//    * 확인버튼 내용
//    */
//   confirm: string;
//   /**
//    * 취소 버튼 클릭 이벤트
//    * @param e
//    * @returns
//    */
//   onCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
//   /**
//    * 확인 버튼 클릭 이벤트
//    * @param e
//    * @returns
//    */
//   onConfirm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
// }) {
//   return (
//     <div className={AlertDialogWrapperStyle}>
//       <div className={AlertDialogHeaderStyle}>
//         <div className={AlertDialogTitleStyle}>{title}</div>
//       </div>
//       <div className={AlertDialogContentStyle}>{content}</div>
//       <div className={AlertDialogButtonGroupWrapperStyle}>
//         <button className={AlertDialogButonStyle} onClick={onCancel}>
//           <div className={alertDialogConfirmButtonStyle({ state: 'cancel' })}>
//             {cancel}
//           </div>
//         </button>
//         <button className={AlertDialogButonStyle} onClick={onConfirm}>
//           <div className={alertDialogConfirmButtonStyle({ state: 'ok' })}>
//             {confirm}
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Alert;
