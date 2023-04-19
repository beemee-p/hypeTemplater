import React, { ReactElement } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { ButtonTheme } from "@/styles/ButtonTheme";

const HypeBanner = (): ReactElement => {
  return (
    <DIV_HypeBanner>
      <h1>
        Updates, inspiration,
        <br />
        and more from
        <br />
        the Hype community
      </h1>

      <Button design={ButtonTheme.whiteButtonStyle}>문의하기</Button>
    </DIV_HypeBanner>
  );
};

const DIV_HypeBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1080px;
  background: gray;

  > h1 {
    margin-top: 0;
    margin-bottom: 40px;
    font-family: "Gotham";
    font-size: 70px;
    text-align: left;
    line-height: 92px;
    letter-spacing: -0.03em;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    color: #ffffff;
  }
`;

export default HypeBanner;
