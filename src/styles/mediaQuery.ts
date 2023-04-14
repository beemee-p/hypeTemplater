export const deviceWidth = {
  mobile: 600,
  tablet: 1024,
  desktopX1: 1440,
  desktopX2: 1920,
  desktopX3: 2560,
};

export const mobileMedia = `@media only screen and (max-width: ${deviceWidth.mobile}px)`;
export const tabletMedia = `@media only screen and (max-width: ${deviceWidth.tablet}px)`;
export const desktopX1Media = `@media only screen and (max-width: ${deviceWidth.desktopX1}px)`;
export const desktopX2Media = `@media only screen and (max-width: ${deviceWidth.desktopX2}px)`;
export const desktopX3Media = `@media only screen and (max-width: ${deviceWidth.desktopX3}px)`;
export const desktopX4Media = `@media only screen and (min-width: ${
  deviceWidth.desktopX3 + 1
}px)`;
