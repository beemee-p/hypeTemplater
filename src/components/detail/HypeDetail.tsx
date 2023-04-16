import { MouseEvent, ReactElement, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { Portfolio } from "@/model/Portfolio";
import { desktopX1Media, mobileMedia, tabletMedia } from "@/styles/mediaQuery";

export interface HypeDetailProps {
  portfolio: Portfolio;
  isPage?: boolean;
  close?: () => void;
}

const HypeDetail = (props: HypeDetailProps): ReactElement => {
  const router = useRouter();
  const clickedRef = useRef<EventTarget>();
  const isPage = props.isPage || false;

  useEffect(() => {
    window.history.pushState(null, "", `/detail/${props.portfolio.id}`);
  }, []);

  useEffect(() => {
    if (!isPage) {
      const handleKeyDown = (e: Event) => {
        if ((e as any).key === "Escape") {
          handleClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown, { capture: true });

      return () => {
        window.removeEventListener("keydown", handleKeyDown, { capture: true });
      };
    }
  }, [isPage]);

  // NOTE: 문서 로드 시 크롬, 사파리 등에서 popstate 이벤트 발생
  useEffect(() => {
    window.addEventListener("popstate", handleClose, {
      capture: true,
    });

    return () => {
      window.removeEventListener("popstate", handleClose, {
        capture: true,
      });
    };
  }, []);

  function handleClose(e?: MouseEvent<HTMLElement> | PopStateEvent) {
    if (clickedRef.current) {
      clickedRef.current = undefined;
      return;
    }

    props.close && props.close();
    e?.stopPropagation();
    e?.type !== "popstate" && router.push({ pathname: "/" });
  }

  return (
    <DIV_HypeDetail isPage={isPage} onMouseUp={handleClose}>
      <div
        className="bbs-content-wrapper"
        onMouseUp={(e) => {
          clickedRef.current = e.target;
        }}
        onMouseDown={(e) => {
          clickedRef.current = e.target;
        }}
      >
        테스트입니다
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
      </div>
    </DIV_HypeDetail>
  );
};

const ARTICLE_Card = styled.article`
  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const DIV_HypeDetail = styled.div<{ isPage?: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #000000;
  background: ${({ isPage }) => (isPage ? "#ffffff" : "#000000")};

  * {
    box-sizing: border-box;
  }

  .contents {
    overflow: hidden;
    word-break: break-all;
  }

  .bbs-content-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: min-content;
    min-height: 101vh;
    margin-top: 24px;
    margin-bottom: 24px;
    border-radius: 8px;
    width: ${({ isPage }) => (isPage ? "90%" : "unset")};
  }

  .loading-wrapper {
    width: 100%;
    display: flex;
    padding: 20px 0;
    justify-content: center;
  }

  ${({ isPage }) =>
    isPage
      ? css`
          overflow: unset;
        `
      : css`
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
          background-color: rgb(0, 0, 0, 0.8);
        `}

  ${desktopX1Media} {
    .portfolio-content-wrapper {
      width: 85%;
    }
  }

  ${tabletMedia} {
    display: block;

    ${({ isPage }) =>
      isPage
        ? css`
            z-index: 50;
            background-color: #fbfcfc;
          `
        : css`
            background-color: #fbfcfc;
          `}
    .bbs-content-wrapper {
      width: 100%;
      min-width: unset;
      margin-top: unset;
    }

    .loading-wrapper {
      ${({ isPage }) => isPage && css``}
    }
  }

  ${mobileMedia} {
    .bbs-content-wrapper {
      margin-bottom: 40px;
    }
  }
`;

export default HypeDetail;
