import { ReactElement, useState } from "react";
import { Portfolio } from "@/model/Portfolio";
import styled from "styled-components";
import GridCard from "../common/GridCard";
import HypeCard from "./HypeCard";
import { tabletMedia } from "@/styles/mediaQuery";
import HypeDetail from "../detail/HypeDetail";

interface HypeListProps {
  portfolios: Portfolio[];
}

const HypeList = (props: HypeListProps): ReactElement => {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);

  return (
    <DIV_HypeList>
      <GridCard
        direction="row"
        rowMargin={16}
        columnMargin={16}
        itemPerLine={2}
      >
        {props.portfolios?.map((portfolio) => (
          <div key={portfolio.id} onClick={() => setPortfolio(portfolio)}>
            <HypeCard portfolio={portfolio} />
          </div>
        ))}
      </GridCard>

      {portfolio && (
        <HypeDetail
          portfolio={portfolio}
          isPage={false}
          close={() => setPortfolio(null)}
        />
      )}
    </DIV_HypeList>
  );
};

const DIV_HypeList = styled.div`
  display: flex;
  margin-left: 53px;

  ${tabletMedia} {
    margin-left: 0;
  }
`;

export default HypeList;
