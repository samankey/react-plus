import { globalStyle } from '@vanilla-extract/css';
import { vars } from '../theme/theme.css';

globalStyle('html, body', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('button', {
  border: 0,
  outline: 0,
  backgroundColor: 'transparent',
  cursor: 'pointer',
});

globalStyle('ul', {
  listStyle: 'none',
  paddingLeft: '0px',
});

globalStyle('textarea:focus', {
  outline: 'none',
});

globalStyle('input', {
  backgroundColor: 'transparent',
  color: vars.colors['Gray-900'],
  borderStyle: 'none',
});

globalStyle('input:focus', {
  outline: 'none',
});

globalStyle('h1,h2,h3,p,ul,table,tr,th,td', {
  margin: 0,
  fontSize: '1rem',
});

globalStyle('ul', {
  listStyle: 'none',
  paddingLeft: '0px',
});

// globalStyle('img', {
//   WebkitUserDrag: 'none',
// });