import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import { Portfolio } from "@model/Portfolio";
import HypeDetailComponent from "@components/detail/HypeDetail";

interface PortfolioDetailProps {
  portfolios: Portfolio[];
}

const HypeDetail = (props: PortfolioDetailProps): ReactElement => {
  const router = useRouter();
  const { id } = router.query;
  const portfolio = props.portfolios.find((v) => id && v.id === +id);

  return (
    <>
      {portfolio && <HypeDetailComponent portfolio={portfolio} isPage={true} />}
    </>
  );
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

export default HypeDetail;
