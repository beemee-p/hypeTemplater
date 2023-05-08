import React, { ReactElement } from "react";
import styled from "styled-components";

const HypeBanner = (): ReactElement => {
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
    </DIV_HypeBanner>
  );
};

const DIV_HypeBanner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 56px);

  .bg-video {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
