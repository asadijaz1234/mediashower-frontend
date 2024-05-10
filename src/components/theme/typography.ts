import { Theme } from "@mui/material/styles";

import { GooglePTSansFont } from "~/app/fonts";

const pxToRem = (value: number): string => {
  return `${value / 10}rem`;
};

const fontWeightLight = 400;
const fontWeightRegular = 400;
const fontWeightMedium = 700;
const fontWeightBold = 700;

export const typography: Partial<Theme["typography"]> = {
  fontFamily: GooglePTSansFont.style.fontFamily,
  htmlFontSize: 10,
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightBold,

  h2: {
    fontSize: pxToRem(54),
    fontWeight: fontWeightMedium,
    lineHeight: 1.3,
  },

  h3: {
    fontSize: pxToRem(46),
    fontWeight: fontWeightMedium,
    lineHeight: 1.28,
  },

  h4: {
    fontSize: pxToRem(36),
    fontWeight: fontWeightMedium,
    lineHeight: 1.24,
  },

  h5: {
    fontSize: pxToRem(22),
    fontWeight: fontWeightMedium,
    lineHeight: 1.4,
  },

  h6: {
    fontSize: pxToRem(18),
    fontWeight: fontWeightRegular,
    lineHeight: 1.4,
  },

  body1: {
    fontSize: pxToRem(16),
  },

  body2: {
    fontSize: pxToRem(14),
  },

  caption: {
    fontSize: pxToRem(12),
    lineHeight: 1.4,
    letterSpacing: 0.4,
  },
};
