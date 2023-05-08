import React, { ButtonHTMLAttributes, ReactElement } from "react";
import styled, { CSSProp } from "styled-components";
import { ButtonTheme } from "@/styles/ButtonTheme";

type ButtonType = "text" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  design?: CSSProp;
  buttonType?: ButtonType;
}

const Button = (props: ButtonProps): ReactElement => {
  const btnType = props.buttonType || "text";

  return (
    <BUTTON_Button {...props} buttonType={btnType} onClick={props.onClick}>
      {props.children}
    </BUTTON_Button>
  );
};

const BUTTON_Button = styled.button<{
  design?: CSSProp;
  buttonType: ButtonType;
}>`
  ${({ design }) => design};
  ${({ buttonType }) =>
    buttonType === "icon"
      ? ButtonTheme.defaultIconButtonStyle
      : ButtonTheme.defaultButtonStyle};
`;

export default Button;
