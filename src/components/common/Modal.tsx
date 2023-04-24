import {
  ReactElement,
  ReactNode,
  MouseEvent,
  HTMLAttributes,
  useRef,
} from "react";
import styled, { CSSProp } from "styled-components";

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  open: boolean;
  close?: () => void;
  closeIcon?: ReactNode;
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
  design?: CSSProp;
}

const Modal = (props: ModalProps): ReactElement => {
  const clickRef = useRef<EventTarget>();

  function handleClose(e: MouseEvent<HTMLElement>) {
    if (clickRef.current) {
      clickRef.current = undefined;
      return;
    }

    e.stopPropagation();
    props.close && props.close();
  }

  return (
    <DIV_Modal
      {...props}
      className={`modal-bg ${props.className}`}
      onMouseUp={handleClose}
    >
      <div
        className={"modal-wrap"}
        onMouseDown={(e) => {
          clickRef.current = e.target;
        }}
        onMouseUp={(e) => {
          clickRef.current = e.target;
        }}
      >
        {props.header && <header>{props.header}</header>}
        {props.closeIcon && (
          <div className={"modal-close"} onClick={props.close}>
            {props.closeIcon}
          </div>
        )}
        <main>{props.content}</main>
        <footer>{props.footer}</footer>
      </div>
    </DIV_Modal>
  );
};

const DIV_Modal = styled.div<{ design?: CSSProp }>`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  ${({ design }) => design && design};
`;

export default Modal;
