import { css } from "styled-components";

const whiteButtonStyle = css`
  max-width: 243px;
  width: fit-content;
  margin-bottom: 12px;
  cursor: pointer;
  border: 0;
  text-align: center;
  box-sizing: border-box;
  font-weight: 500;
  background-color: #ffffff;
  color: #696969;
  padding: 12px 24px;
  border-radius: 28px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.25px;
  font-weight: 700;

  &:hover {
    background-color: #696969;
    color: #ffffff;
  }
`;

const grayButtonStyle = css`
  width: fit-content;
  margin-bottom: 12px;
  cursor: pointer;
  border: 0;
  text-align: center;
  box-sizing: border-box;
  font-weight: 500;
  background-color: #696969;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 28px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.25px;
  font-weight: 700;

  &:hover {
    background-color: #ffffff;
    color: #696969;
  }
`;

export const ButtonTheme = { whiteButtonStyle, grayButtonStyle };
