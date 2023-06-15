// import { style } from '@vanilla-extract/css';
// import { fonts, vars } from '../../theme/theme.css';
// import { recipe } from '@vanilla-extract/recipes';

// // export const FloatingLayoutStyle = style({
// //   position:"fixed",
// //   top:"50%",
// //   left:"50%",
// //   transform:"translate(-50%, -50%)"
// // })

// // export const AlertDialogWrapperStyle = style([FloatingLayoutStyle,
// //   {
// //     padding: "21px 0px 0px",
// //     background: "#FFFFFF",
// //     borderRadius: "14px",
// //   }
// // ])
// export const AlertDialogWrapperStyle = style({
//   padding: '21px 0px 0px',
//   borderRadius: '14px',
//   backgroundColor: '#FFFFFF',
//   maxWidth: '319px',
//   overflow: 'hidden',
// });
// export const AlertDialogHeaderStyle = style({
//   textAlign: 'center',
//   paddingLeft: '21px',
//   paddingRight: '21px',
//   paddingBottom: '7px',
// });
// export const AlertDialogTitleStyle = style([
//   fonts.subTitle1,
//   {
//     color: vars.colors['black-100'],
//     flex: 'none',
//     order: 0,
//     flexGrow: 0,
//   },
// ]);

// export const AlertDialogContentStyle = style([
//   fonts.body2,
//   {
//     color: vars.colors['black-70'],
//     flex: 'none',
//     order: 1,
//     flexGrow: 0,
//     textAlign: 'center',
//     paddingLeft: '21px',
//     paddingRight: '21px',
//   },
// ]);

// export const AlertDialogButtonGroupWrapperStyle = style({
//   width: '100%',
//   display: 'flex',
//   flexDirection: 'row',
//   paddingTop: '21px',
// });

// export const AlertDialogButonStyle = style({
//   backgroundColor: '#FFFFFF',
//   border: 0,
//   borderTopColor: vars.colors['gray-line'],
//   borderTopStyle: 'solid',
//   borderTopWidth: '1px',
//   borderRightColor: vars.colors['gray-line'],
//   borderRightStyle: 'solid',
//   borderRightWidth: '1px',
//   margin: 0,
//   flex: '1 1 auto',
//   minWidth: '50%',
//   ':last-child': {
//     borderRight: 0,
//   },
//   padding: 0,
//   height: 55,
//   overflow: 'hidden',
// });

// export const alertDialogConfirmButtonStyle = recipe({
//   base: [
//     {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       width: '100%',
//       height: '100%',
//       cursor: 'pointer',
//     },

//     fonts.body2,
//   ],
//   variants: {
//     state: {
//       ok: { color: vars.colors['blue-100'] },
//       cancel: { color: vars.colors['black-70'] },
//     },
//   },
// });
