import { style } from '@vanilla-extract/css';

export const AlertBackdropStyle = style({
  position: 'absolute',
  top: '0px',
  right: '0px',
  left: '0px',
  bottom: '0px',
  opacity: 0.7,
  backgroundColor: 'rgba(0,0,0,0.5)',
  margin: 0,
  padding: 0,
  zIndex: 2,
});

export const AlertWrapperStyle = style({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  zIndex: 1,
  left: '0px',
  top: '0px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
});
