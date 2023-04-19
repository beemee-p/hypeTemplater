import { ButtonTheme } from "@/styles/ButtonTheme";
import { ReactElement, useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";

const categories = [
  "MAIN",
  "EDITOR'S NOTE",
  "NEWS",
  "FASHION",
  "BEUATY",
  "MUSIC",
];

const HypeFilter = (): ReactElement => {
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
    </DIV_HypeFilter>
  );
};

const DIV_HypeFilter = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
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
