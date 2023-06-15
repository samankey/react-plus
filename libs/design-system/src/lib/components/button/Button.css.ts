// import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

// import { recipe } from '@vanilla-extract/recipes';
// import { vars } from '../../theme/theme.css';


// export const buttonStyle = recipe({
//   base: {
//     cursor: 'pointer',
//     border: 'none',
//     borderRadius: '0.5rem',
//     maxWidth: '333px',
//     padding: '0px 14px',
//   },
//   defaultVariants: {
//     theme: 'primary',
//     size: 'large',
//     activiate: true,
//     radius: 'R100',
//   },
//   compoundVariants: [
//     {
//       variants: {
//         theme: 'primary',
//         type: 'fill',
//       },
//       style: {
//         color: '#FFFFFF',
//         background: vars.colors['blue-100'],
//       },
//     },
//     {
//       variants: {
//         theme: 'secondary',
//         type: 'fill',
//       },
//       style: {
//         color: vars.colors['blue-100'],
//         background: vars.colors['blue-10'],
//       },
//     },
//     {
//       variants: {
//         theme: 'gray',
//         type: 'fill',
//       },
//       style: {
//         color: vars.colors['black-70'],
//         background: vars.colors['gray-light'],
//       },
//     },
//     {
//       variants: {
//         theme: 'primary',
//         type: 'line',
//       },
//       style: {
//         color: vars.colors['blue-100'],
//         borderColor: vars.colors['blue-100'],
//         borderWidth: '1px',
//         borderStyle: 'solid',
//       },
//     },
//     {
//       variants: {
//         theme: 'secondary',
//         type: 'line',
//       },
//       style: {
//         color: vars.colors['blue-100'],
//         borderColor: vars.colors['blue-10'],
//         borderWidth: '1px',
//         borderStyle: 'solid',
//       },
//     },
//     {
//       variants: {
//         theme: 'gray',
//         type: 'line',
//       },
//       style: {
//         borderColor: vars.colors['gray-light'],
//         borderWidth: '1px',
//         borderStyle: 'solid',
//       },
//     },
//   ],
//   variants: {
//     type: {
//       fill: {},
//       line: {
//         backgroundColor: 'transparent',
//       },
//     },
//     theme: {
//       primary: {},
//       secondary: {},
//       gray: {},
//     },
//     activiate: {
//       true: {},
//       false: { opacity: 0.3 },
//     },
//     radius: {
//       R100: {
//         borderRadius: '100px',
//       },
//       R7: {
//         borderRadius: '0.3rem',
//       },
//     },
//     size: {
//       large: {
//         height: '3.5rem',
//       },
//       medium: {
//         height: '3rem',
//       },
//       small: {
//         height: '2.5rem',
//       },
//       tiny: {
//         height: '2rem',
//       },
//     },
//   },
// });
