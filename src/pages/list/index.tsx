import { ReactElement } from 'react';

const PortfolioList = (props: any): ReactElement => {
  return <div>{props.portfolios.map((i: any) => i.title)}</div>;
};

export async function getServerSideProps() {
  try {
    const res = await fetch(`http://localhost:3000/api/portfolios`);
    const data = await res.json();
    return { props: { portfolios: data } };
  } catch (err) {
    console.error(err);
  }
}
export default PortfolioList;
