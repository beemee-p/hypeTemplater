import { ReactElement } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Portfolio } from "@/model/Portfolio";
import HypeBanner from "@/components/list/HypeBanner";
import HypeFilter from "@/components/list/HypeFilter";
import HypeList from "@/components/list/HypeList";

interface PortfolioListProps {
  portfolios: Portfolio[];
}

const HypeMain = (props: PortfolioListProps): ReactElement => {
  props;
  return (
    <DIV_HypeLanding>
      <HypeBanner />

      <DIV_HypeContent>
        <HypeFilter />
        <HypeList />

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
      </DIV_HypeContent>
    </DIV_HypeLanding>
  );
};

const DIV_HypeLanding = styled.div``;
const DIV_HypeContent = styled.div``;

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

export default HypeMain;
