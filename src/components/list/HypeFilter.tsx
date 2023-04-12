import { ReactElement, useState } from "react";
import styled from "styled-components";

const categories = [
  "전체",
  "콜라보레이션",
  "아트워크&디자인",
  "영상",
  "이벤트",
  "굿즈",
];

const HypeFilter = (): ReactElement => {
  const [category, setCategory] = useState<number>(0);

  return (
    <DIV_HypeFilter>
      {categories.map((label, index) => (
        <button
          className={`category-btn ${category === index ? "active" : ""}`}
          key={index}
          onClick={() => setCategory(index)}
        >
          {label}
        </button>
      ))}
    </DIV_HypeFilter>
  );
};

const DIV_HypeFilter = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 50px;

  .category-btn {
    width: fit-content;
    margin-bottom: 12px;
    cursor: pointer;
    border: 0;
    text-align: center;
    box-sizing: border-box;
    font-weight: 500;
    background-color: #696969;
    color: #ffffff;
    padding: 12px 24px;
    border-radius: 28px;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.25px;
    font-weight: 700;

    &.active {
      background-color: #ffffff;
      color: #696969;
    }
  }
`;

export default HypeFilter;
