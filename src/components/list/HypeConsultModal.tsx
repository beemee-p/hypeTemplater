import { mobileMedia } from "@/styles/mediaQuery";
import { ReactElement, useMemo } from "react";
import styled, { css } from "styled-components";
import Modal from "../common/Modal";
import HypeConsultForm from "./HypeConsultForm";
import iconClose from "@/styles/image/icon_close.svg";
import Image from "next/image";

interface HypeConsultModalProps {
  open: boolean;
  close: () => void;
}

const HypeConsultModal = (props: HypeConsultModalProps): ReactElement => {
  const content = useMemo(() => {
    return (
      <DIV_Content>
        <div className="top-panel">
          <div className="top-title">
            성공적인 패션 컨설팅을 위한 <br />
            비즈니스 상담을 받아보세요
          </div>
        </div>

        <div className="bottom-panel">
          <HypeConsultForm close={props.close} />
        </div>
      </DIV_Content>
    );
  }, [props.close]);

  return (
    <>
      <Modal
        open={props.open}
        close={props.close}
        closeIcon={<Image src={iconClose} alt={"close"} />}
        design={ConsultModalStyle}
        content={content}
      />
    </>
  );
};

const ConsultModalStyle = css`
  .modal-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 8px;
    background: #ffffff;

    .modal-close {
      position: absolute;
      z-index: 200;
      top: 20px;
      right: 24px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    header {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      position: relative;
      box-sizing: border-box;
      padding: 20px;
    }

    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;
    }

    ${mobileMedia} {
      width: 90%;
    }
  }
`;

const DIV_Content = styled.div`
  height: 100%;

  .top-panel {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background: linear-gradient(157.79deg, #1ecad3 29.54%, #0edb78 86.32%);
    color: #ffffff;
    padding: 48px;

    .top-title {
      height: 100%;
      font-weight: 700;
    }
  }

  .bottom-panel {
    padding: 48px;
    overflow: auto;
  }

  ${mobileMedia} {
    flex-direction: column;
    overflow: scroll;

    .top-panel {
      width: 100%;
      padding: 16px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    .bottom-panel {
      width: calc(100% - 32px);
      padding: 16px;
      overflow: unset;
    }
  }
`;

export default HypeConsultModal;
