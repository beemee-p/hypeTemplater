<<<<<<< HEAD
import { ReactElement } from "react";
=======
import { ReactElement } from 'react';
import styled from 'styled-components';
import { Portfolio } from '@/model/Portfolio';
>>>>>>> update portfolio list api

interface PortfolioListProps {
  portfolios: Portfolio[];
}
const PortfolioList = (props: PortfolioListProps): ReactElement => {
  return (
    <section>
      <h1>LIST PAGE</h1>
      {/* TODO:GRID Component*/}
      {props.portfolios.map((i: Portfolio) => (
        <ARTICLE_Card>
          <img src={i.thumbnail?.url} alt={i.thumbnail.title} />
          <h3>{i.title}</h3>
          <p>{i.user.name}</p>
        </ARTICLE_Card>
      ))}
    </section>
  );
};

const ARTICLE_Card = styled.div`
  //TODO:aspect RATIO
  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export async function getServerSideProps() {
  try {
    const res = await fetch(`http://localhost:3000/api/portfolios`);
    const data = await res.json();
    return { props: { portfolios: data } };
  } catch (err) {
    console.error(err);
    return { props: { portfolios: [] } };
  }
}
export default PortfolioList;
