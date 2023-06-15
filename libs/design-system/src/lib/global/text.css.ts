import {
  globalFontFace,
  style
} from '@vanilla-extract/css';

const spoqaHanSansNeo = 'Spoqa Han Sans Neo';

globalFontFace('spoqaHanSansNeo', {
  src: `local("Spoqa Han Sans Neo Medium"),
    url("../../static/fonts/SpoqaHanSansNeo/Medium/SpoqaHanSansNeo-Medium.woff2") format("woff2")`,
});

export const font = style({
  fontFamily: spoqaHanSansNeo
});