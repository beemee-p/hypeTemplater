import { MouseEvent, ReactElement, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import { Portfolio } from "@/model/Portfolio";
import { desktopX1Media, mobileMedia, tabletMedia } from "@/styles/mediaQuery";
import HypeDetailContent from "./HypeDetailContent";

export interface HypeDetailProps {
  portfolio: Portfolio;
  isPage?: boolean;
  close?: () => void;
}

const HypeDetail = (props: HypeDetailProps): ReactElement => {
  const router = useRouter();
  const clickRef = useRef<EventTarget>();
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
  });

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
  });

  function handleClose(e?: MouseEvent<HTMLElement> | PopStateEvent) {
    if (clickRef.current) {
      clickRef.current = undefined;
      return;
    }

    props.close && props.close();
    e?.stopPropagation();
    e?.type !== "popstate" && router.back;
  }

  return (
    <DIV_HypeDetail isPage={isPage} onMouseUp={handleClose}>
      <div
        className="detail-wrapper"
        onMouseUp={(e) => {
          clickRef.current = e.target;
        }}
        onMouseDown={(e) => {
          clickRef.current = e.target;
        }}
      >
        <HypeDetailContent {...props} handleClose={handleClose} />
      </div>
    </DIV_HypeDetail>
  );
};

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

  .detail-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px auto;
    width: 90%;
    height: min-content;
    max-width: 1400px;
    min-height: 101vh;
    border-radius: 8px;
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
    .detail-wrapper {
      width: 100%;
      min-width: unset;
      margin-top: unset;
    }

    .loading-wrapper {
      ${({ isPage }) => isPage && css``}
    }
  }

  ${mobileMedia} {
    .detail-wrapper {
      margin-bottom: 40px;
    }
  }
`;

export default HypeDetail;
