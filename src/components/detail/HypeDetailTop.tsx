import React, { ReactElement } from "react";
import { Portfolio } from "@/model/Portfolio";
import styled from "styled-components";

interface HypeDetailTopProps {
  portfolio: Portfolio;
}

const HypeDetailTop = (props: HypeDetailTopProps): ReactElement => {
  return (
    <DIV_HypeDetailTop>
      <div className="top-category">아트워크&디자인, 영상</div>
      <div className="top-title">{props.portfolio.title}</div>
      <div className="top-user">{props.portfolio?.user.userRole}</div>
    </DIV_HypeDetailTop>
  );
};

const DIV_HypeDetailTop = styled.div`
  padding: 64px 140px 48px;

  .top-category {
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.5px;
    font-weight: 600;
  }

  .top-title {
    margin-bottom: 12px;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.5px;
    font-weight: 600;
  }

  .top-user {
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.25px;
    font-weight: 600;
  }
`;

export default HypeDetailTop;
