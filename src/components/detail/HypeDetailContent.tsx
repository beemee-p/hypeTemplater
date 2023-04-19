import React, { ReactElement } from "react";
import styled from "styled-components";
import Image from "next/image";
import { HypeDetailProps } from "./HypeDetail";
import {
  desktopX1Media,
  desktopX2Media,
  tabletMedia,
} from "@/styles/mediaQuery";

interface HypeDetailContentProps extends HypeDetailProps {
  handleClose: () => void;
}

const HypeDetailContent = (props: HypeDetailContentProps): ReactElement => {
  return (
    <DIV_HypeDetailContent>
      <ARTICLE_Card key={props.portfolio?.id}>
        <Image
          src={props.portfolio?.thumbnail?.url || ""}
          alt={props.portfolio?.thumbnail.title || ""}
          width={600}
          height={400}
        />

        <h3>{props.portfolio?.title}</h3>
        <p>{props.portfolio?.user.name}</p>
      </ARTICLE_Card>
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
  height: 5000px;

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

const ARTICLE_Card = styled.article`
  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 4px;
  }
`;
export default HypeDetailContent;
