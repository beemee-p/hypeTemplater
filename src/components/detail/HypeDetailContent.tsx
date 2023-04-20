import React, { ReactElement } from "react";
import styled from "styled-components";
import Image from "next/image";
import { HypeDetailProps } from "./HypeDetail";
import {
  desktopX1Media,
  desktopX2Media,
  tabletMedia,
} from "@/styles/mediaQuery";
import HypeDetailTop from "./HypeDetailTop";

interface HypeDetailContentProps extends HypeDetailProps {
  handleClose: () => void;
}

const HypeDetailContent = (props: HypeDetailContentProps): ReactElement => {
  return (
    <DIV_HypeDetailContent>
      <HypeDetailTop portfolio={props.portfolio} />

      <DIV_Content>
        <div className="test">
          Marithé François Girbaud Marithé <br />
          Girbaud Marithé François Girbaud Marithé François <br />
          Girbaud Marithé François Girbaud Marithé François Girbaud Marithé
        </div>

        <ARTICLE_Card key={props.portfolio?.id}>
          <Image
            src={props.portfolio?.thumbnail?.url || ""}
            alt={props.portfolio?.thumbnail.title || ""}
            width={600}
            height={400}
          />
        </ARTICLE_Card>
      </DIV_Content>
    </DIV_HypeDetailContent>
  );
};

const DIV_HypeDetailContent = styled.div<{
  isPage?: boolean;
}>`
  border-radius: 8px;
  background: #ffffff;
  border: ${({ isPage }) => (isPage ? `1px solid gray` : "none")};
  width: 100%;
  max-width: 1400px;
  height: 100vh;

  .top-action-info {
    display: flex;
  }

  ${desktopX2Media} {
    max-width: 1400px;
  }

  ${desktopX1Media} {
    min-width: unset;
  }

  ${tabletMedia} {
    width: 100%;
  }
`;

const DIV_Content = styled.div`
  padding: 0 140px;
  text-align: center;

  > div,
  > img {
    margin-bottom: 40px;
  }
`;

const ARTICLE_Card = styled.article`
  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 4px;
  }
`;
export default HypeDetailContent;
