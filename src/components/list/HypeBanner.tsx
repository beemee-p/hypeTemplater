import React, { ReactElement } from "react";
import styled from "styled-components";

const HypeBanner = (): ReactElement => {
  return (
    <DIV_AgencyBBSBanner>
      <h1>
        Creative Partner <br />
        for Businness
      </h1>

      <button>지금 문의하고 상담받기</button>
    </DIV_AgencyBBSBanner>
  );
};

const DIV_AgencyBBSBanner = styled.div`
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
    font-size: 88px;
    text-align: center;
    line-height: 92px;
    letter-spacing: -0.03em;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    color: #ffffff;
  }

  > button {
    max-width: 243px;
  }
`;

export default HypeBanner;
