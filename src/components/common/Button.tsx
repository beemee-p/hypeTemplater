import React, { ButtonHTMLAttributes, ReactElement } from "react";
import styled, { CSSProp } from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  design?: CSSProp;
}

const Button = (props: ButtonProps): ReactElement => {
  return (
    <BUTTON_Button {...props} onClick={props.onClick}>
      {props.children}
    </BUTTON_Button>
  );
};

const BUTTON_Button = styled.button<{ design?: CSSProp }>`
  ${({ design }) => design}
`;

export default Button;
