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
    fontSize: '1.15rem',
    fontWeight: '600',
    letterSpacing: '-0.04rem',
    lineHeight: '1.4',
  }),
  title2: style({
    fontFamily: 'Noto Sans KR',
    fontSize:'1.15rem',
    fontWeight:"400",
    letterSpacing:'-0.04rem',
    lineHeight: '1.4',
  }),
  subTitle1: style({
    fontFamily: 'Noto Sans KR',
    fontSize: '1rem',
    fontWeight: '600',
    letterSpacing: '-0.04rem',
    lineHeight: '1.4',
  }),
  subTitle2: style({
    fontFamily: 'Noto Sans KR',
    fontSize: '1rem',
    fontWeight: '400',
    letterSpacing: '-0.04rem',
    lineHeight: '1.4',
  }),
  body1: style({
    fontFamily: 'Noto Sans KR',
    fontSize: '0.85rem',
    fontWeight: '500',
    letterSpacing: '-0.03rem',
    lineHeight: '1.4',
  }),
  body2: style({
    fontFamily: 'Noto Sans KR',
    fontSize: '0.85rem',
    fontWeight: '400',
    letterSpacing: '-0.03rem',
    lineHeight: '1.4',
  }),
  caption1: style({
    fontFamily: 'Noto Sans KR',
    fontSize: '0.75rem',
    fontWeight: '400',
    letterSpacing: '-0.03rem',
    lineHeight: '1.4',
  }),
  caption2: style({
    fontFamily: 'Noto Sans KR',
    fontSize: '0.6rem',
    fontWeight: '400',
    letterSpacing: '-0.03rem',
    lineHeight: '1.4',
  }),
}

const [themeClass, vars] = createTheme({
  colors: {
    // Gray
    black: '#000000',
    'Gray-900': '#001A1D',
    'Gray-800': '#303336',
    'Gray-600': '#636669',
    'Gray-500': '#7D8083',
    'Gray-400': '#96999C',
    'Gray-300': '#B0B3B6',
    'Gray-200': '#C9CCCF',
    'Gray-100': '#E3E6E9',
    'Gray-60': '#EDF0F3',
    'Gray-50': '#EFF2F5',
    'Gray-20': '#F9FAFB',
    White: '#FFFFFF',

    // Blue: Primary Color
    'Blue-300': '#0045A8',
    'Blue-100': '#005ADB',
    'Blue-30': '#B2CDF4',
    'Blue-10': '#DBEAFF',
    'Blue-Back': '#F5F8FD',

    // Green: Positive
    'Green-300': '#08870E',
    'Green-100': '#0CBA13',
    'Green-30': '#B6EAB8',
    'Green-10': '#E2FDE3',
    'Green-Back': '#F3FEF4',

    // Orange: Caution
    'Orange-300': '#A66820',
    'Orange-100': '#FFA031',
    'Orange-30': '#FFE3C1',
    'Orange-10': '#FFE8CC',
    'Orange-Back': '#FFF6EB',

    // Red: Warning
    'Red-300': '#9E312A',
    'Red-100': '#F74C41',
    'Red-30': '#FDC9C6',
    'Red-10': '#FDD6D3',
    'Red-Back': '#FEEFED',

    // Violet: Secondary
    'Violet-300': '#543D94',
    'Violet-100': '#8661EC',
    'Violet-30': '#DBD0F9',
    'Violet-10': '#EEE8FC',
    'Violet-Back': '#F8F6FE',
  },
});

export { themeClass, vars };
