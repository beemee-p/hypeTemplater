import { ReactElement } from "react";
import { Portfolio } from "@/model/Portfolio";
import styled from "styled-components";
import GridCard from "../common/GridCard";
import HypeCard from "./HypeCard";

interface HypeListProps {
  portfolios: Portfolio[];
}

const HypeList = (props: HypeListProps): ReactElement => {
  console.log(props.portfolios);
  return (
    <DIV_HypeList>
      <GridCard
        direction="row"
        rowMargin={16}
        columnMargin={16}
        itemPerLine={2}
      >
        {props.portfolios?.map((portfolio) => (
          <div key={portfolio.id}>
            <HypeCard portfolio={portfolio} />
          </div>
        ))}
      </GridCard>
    </DIV_HypeList>
  );
};

const DIV_HypeList = styled.div``;

export default HypeList;
