import {
  blue,
  red,
  green,
  cyan,
  blueDark,
  redDark,
  greenDark,
  cyanDark,
  cyanDarkA,
  cyanA,
  mauve,
  mauveDark,
} from "@radix-ui/colors";

const light = {
  colors: {
    ...mauve,
    ...blue,
    ...red,
    ...green,
    ...cyan,
    ...cyanA,
  },
};

const dark = {
  colors: {
    ...mauveDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...cyanDark,
    ...cyanDarkA,
  },
};

export const GlobalTheme = {
  light,
  dark,
};

export type MainTheme = typeof light;
