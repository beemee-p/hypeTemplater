import { ReactElement, useState } from "react";
import HypeConsultModal from "./HypeConsultModal";
import Button from "../common/Button";
import { ButtonTheme } from "@/styles/ButtonTheme";
import styled from "styled-components";

const categories = [
  "MAIN",
  "EDITOR'S NOTE",
  "NEWS",
  "FASHION",
  "BEUATY",
  "MUSIC",
];

const HypeFilter = (): ReactElement => {
  const [isModal, setIsModal] = useState(false);
  const [category, setCategory] = useState<number>(0);

  return (
    <DIV_HypeFilter>
      {categories.map((label, index) => (
        <Button
          className={`category-btn ${category === index ? "active" : ""}`}
          key={index}
          design={ButtonTheme.grayButtonStyle}
          onClick={() => setCategory(index)}
        >
          {label}
        </Button>
      ))}

      <Button
        onClick={() => setIsModal(true)}
        design={ButtonTheme.cyanButtonStyle}
      >
        상담하기
      </Button>

      {isModal && (
        <HypeConsultModal open={isModal} close={() => setIsModal(false)} />
      )}
    </DIV_HypeFilter>
  );
};

const DIV_HypeFilter = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  z-index: 1;
  top: 136px;
  width: 155px;
  min-width: 155px;

  .category-btn {
    &.active {
      background-color: #ffffff;
      color: #696969;
    }
  }
`;

export default HypeFilter;
