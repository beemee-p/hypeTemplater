import { css } from "styled-components";

const defaultButtonStyle = css`
  max-width: 243px;
  width: fit-content;
  padding: 12px 24px;
  margin-bottom: 12px;
  cursor: pointer;
  border: 0;
  border-radius: 28px;
  box-sizing: border-box;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.25px;
`;

const defaultIconButtonStyle = css`
  cursor: pointer;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  padding: 0;

  &:hover {
    opacity: 0.7;
  }
`;

const whiteButtonStyle = css`
  background-color: #ffffff;
  color: #696969;

  &:hover {
    background-color: #696969;
    color: #ffffff;
  }
`;

const grayButtonStyle = css`
  background: ${(props) => props.theme.colors?.mauve9};
  color: #ffffff;

  &:hover {
    background: #ffffff;
    color: ${(props) => props.theme.colors?.mauve9};
  }
`;

const cyanButtonStyle = css`
  background: ${(props) => props.theme.colors?.cyan8};
  color: #ffffff;

  &:hover {
    background: ${(props) => props.theme.colors?.cyan11};
  }
`;

const buttonColor = {
  white: "#ffffff",
  gray: "#696969",
  black: "#000000",
  cyanLight: "#10afa4",
  cyanDark: "#07303b",
};

export const cyanDark = {
  cyan1: "#07191d",
  cyan2: "#061e24",
  cyan3: "#072830",
  cyan4: "#07303b",
  cyan5: "#073844",
  cyan6: "#064150",
  cyan7: "#045063",
  cyan8: "#00647d",
  cyan9: "#05a2c2",
  cyan10: "#00b1cc",
  cyan11: "#00c2d7",
  cyan12: "#e1f8fa",
};

export const ButtonTheme = {
  defaultIconButtonStyle,
  defaultButtonStyle,
  whiteButtonStyle,
  grayButtonStyle,
  cyanButtonStyle,
  buttonColor,
};
