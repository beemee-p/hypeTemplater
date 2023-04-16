import { ReactElement } from "react";
import { Portfolio } from "@model/Portfolio";
import HypeMain from "@components/list/HypeMain";

interface PortfolioListProps {
  portfolios: Portfolio[];
}

const index = (props: PortfolioListProps): ReactElement => {
  return <HypeMain portfolios={props.portfolios} />;
};

export async function getServerSideProps() {
  try {
    const res = await fetch(`http://localhost:3002/api/portfolios`);
    const data = await res.json();
    return { props: { portfolios: data } };
  } catch (err) {
    console.error(err);
    return { props: { portfolios: [] } };
  }
}

export default index;
