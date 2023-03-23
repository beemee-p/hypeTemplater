import { ReactElement } from "react";

const PortfolioList = ({ data }: any): ReactElement => {
  console.log(data.title);
  return <div>{data.title}</div>;
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/example.ts`);
  console.log(res);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default PortfolioList;
