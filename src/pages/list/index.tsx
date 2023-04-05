import { ReactElement } from "react";
import styled from "styled-components";
import { Portfolio } from "@/model/Portfolio";
import Image from "next/image";
import Link from "next/link";

interface PortfolioListProps {
  portfolios: Portfolio[];
}

const PortfolioList = (props: PortfolioListProps): ReactElement => {
  return (
    <section>
      <h1>LIST PAGE</h1>
      {/* TODO:GRID Component*/}
      {props.portfolios.map((portfolio: Portfolio) => (
        <ARTICLE_Card key={portfolio.id}>
          <Link href={`/detail/${portfolio.id}`}>
            <Image
              src={portfolio.thumbnail?.url}
              alt={portfolio.thumbnail.title}
              width={600}
              height={400}
            />
          </Link>
          <h3>{portfolio.title}</h3>
          <p>{portfolio.user.name}</p>
        </ARTICLE_Card>
      ))}
    </section>
  );
};

const ARTICLE_Card = styled.article`
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
    const res = await fetch(`http://localhost:3002/api/portfolios`);
    const data = await res.json();
    return { props: { portfolios: data } };
  } catch (err) {
    console.error(err);
    return { props: { portfolios: [] } };
  }
}
export default PortfolioList;
