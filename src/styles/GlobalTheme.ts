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

const theme = {
  colors: {
    ...gray,
    ...blue,
    ...red,
    ...green,
  },
};

const darkTheme = {
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
};

export const GlobalTheme = {
  theme,
  darkTheme,
};
