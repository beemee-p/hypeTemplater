import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
} from "@radix-ui/colors";

const light = {
  colors: {
    ...gray,
    ...blue,
    ...red,
    ...green,
  },
};

const dark = {
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
};

export const GlobalTheme = {
  light,
  dark,
};

export type MainTheme = typeof light;
