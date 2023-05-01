import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { ButtonTheme } from "@/styles/ButtonTheme";
import HypeConsultModal from "./HypeConsultModal";

const HypeBanner = (): ReactElement => {
  const [isModal, setIsModal] = useState(false);

  return (
    <DIV_HypeBanner>
      <video
        id="background-video"
        className="bg-video"
        autoPlay
        loop
        muted
        poster="https://assets.codepen.io/6093409/river.jpg"
      >
        <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>

      <h1>
        Calm, Inspiration,
        <br />
        and more from
        <br />
        the Hype community
      </h1>

      <Button
        onClick={() => setIsModal(true)}
        design={ButtonTheme.whiteButtonStyle}
      >
        상담하기
      </Button>

      {isModal && (
        <HypeConsultModal open={isModal} close={() => setIsModal(false)} />
      )}
    </DIV_HypeBanner>
  );
};

const DIV_HypeBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 884px;
  position: relative;

  .bg-video {
    position: absolute;
    top: 0;
    width: 100%;
  }

  > h1 {
    position: absolute;
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
