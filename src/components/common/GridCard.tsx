import { ReactElement, ReactNode } from "react";
import styled, { css, CSSProp } from "styled-components";

interface GridCardProps {
  styles?: CSSProp;
  children: ReactNode;
  itemPerLine: number;
  rowMargin?: number;
  columnMargin?: number;
  direction?: "column" | "row";
}

const GridCard = (props: GridCardProps): ReactElement => {
  const rowMargin = props.rowMargin || 0;
  const columnMargin = props.columnMargin || 0;
  const restRowWidth = rowMargin / props.itemPerLine;

  const width =
    props.direction === "row"
      ? `calc(100% / ${props.itemPerLine} - ${rowMargin}px + ${restRowWidth}px)`
      : "100%";

  return (
    <DIV_Grid
      {...props}
      width={width}
      rowMargin={rowMargin}
      columnMargin={columnMargin}
      className="grid"
    >
      {props.children}
    </DIV_Grid>
  );
};

const DIV_Grid = styled.div<GridCardProps & { width: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  flex-wrap: wrap;
  > div,
  > button,
  > p,
  > a,
  > img,
  > input,
  > label,
  > svg {
    ${({ columnMargin, rowMargin, itemPerLine, width }) => css`
      width: ${width};
      flex-shrink: 0;
      margin-right: ${rowMargin}px;
      margin-bottom: ${columnMargin}px;
      &:nth-child(${itemPerLine}n) {
        margin-right: 0;
      }
    `}
  }
  ${({ styles }) => styles}
`;

export default GridCard;
