import { styleVariants, createGlobalTheme, createTheme, createThemeContract, style } from '@vanilla-extract/css';
import { defineProperties } from '@vanilla-extract/sprinkles';

export const fonts = {
  headline: style({
    fontFamily: 'Noto Sans KR',
    fontSize: '1.5rem',
    fontWeight: '600',
    letterSpacing: '-0.04rem',
    lineHeight: '1.4',
  }),
  title1: style({
    fontFamily: 'Noto Sans KR',
    fontSize: '1.3rem',
    fontWeight: '600',
    letterSpacing: '-0.04rem',
    lineHeight: '1.4',
  }),
  title2: style({
    fontFamily: 'Noto Sans KR',
    fontSize: '1.3rem',
    fontWeight: '400',
    letterSpacing: '-0.04rem',
    lineHeight: '1.4',
  }),
  subTitle1: style({
    fontFamily: 'Noto Sans KR',
    fontSize: '1.15rem',
    fontWeight: '600',
    letterSpacing: '-0.04rem',
    lineHeight: '1.4',
  }),
  subTitle2: style({
    fontFamily: 'Noto Sans KR',
    fontSize: '1.15rem',
    fontWeight: '400',
    letterSpacing: '-0.04rem',
    lineHeight: '1.4',
  }),
  body1: style({
    fontFamily: 'Noto Sans KR',
    fontSize: '1rem',
    fontWeight: '500',
    letterSpacing: '-0.03rem',
    lineHeight: '1.4',
  }),
  body2: style({
    fontFamily: 'Noto Sans KR',
    fontSize: '1rem',
    fontWeight: '400',
    letterSpacing: '-0.03rem',
    lineHeight: '1.4',
  }),
  caption1: style({
    fontFamily: 'Noto Sans KR',
    fontSize: '0.85rem',
    fontWeight: '500',
    letterSpacing: '-0.03rem',
    lineHeight: '1.4',
  }),
  caption2: style({
    fontFamily: 'Noto Sans KR',
    fontSize: '0.85rem',
    fontWeight: '400',
    letterSpacing: '-0.03rem',
    lineHeight: '1.4',
  }),
  tiny1: style({
    fontFamily: 'Noto Sans KR',
    fontSize: '0.7rem',
    fontWeight: '500',
    letterSpacing: '-0.03rem',
    lineHeight: '1.4',
  }),
  tiny2: style({
    fontFamily: 'Noto Sans KR',
    fontSize: '0.7rem',
    fontWeight: '400',
    letterSpacing: '-0.03rem',
    lineHeight: '1.4',
  }),
}

const [themeClass, vars] = createTheme({
  colors: {
    'blue-dark': '#0012A2',
    'blue-deep': '#0025B8',
    'blue-100': '#005ADB',
    'blue-30': '#B3CEF4',
    'blue-10': '#E5F0FF',
    'green-100': '#19CC8B',
    'green-10': '#E8FAF3',
    'red-100': '#F21F3F',
    'red-10': '#FEE9EC',
    'violet-100': '#8661EC',
    'violet-10': '#F3EFFD',
    'orange-100': '#FF9900',
    'orange-10': '#FFF5E5',
    'gray-dark': 'black',
    'gray-mid': '#D6D8E1',
    'gray-line': 'rgba(224, 228, 234, 0.7)',
    'gray-light': '#EEF0F4',
    'gray-back': '#F9F9F9',
    'gray-deep': '#999CAA',
    'black-100': '#001129',
    'black-70': '#4C5869',
    'black-40': '#99A0A9',
    'black-20': '#CCCFD4',
  },
});

export { themeClass, vars };
