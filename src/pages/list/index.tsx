import { ReactElement } from 'react';
import { Portfolio } from '@/model/Portfolio';
import { AxiosGet } from '../api/fetcher';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

type PortfolioListProps = {
  portfolioList: Portfolio[];
};

const PortfolioListPage = (props: PortfolioListProps): ReactElement => {
  return (
    <section>
      <h1>LIST PAGE</h1>
      {/* TODO:GRID Component*/}
      {props.portfolioList?.map((portfolio: Portfolio) => (
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
    const data = await AxiosGet('/api/portfolios');
    return {
      props: {
        portfolioList: data,
      },
    };
  } catch (err) {
    console.error(err);
    return { props: { portfolioList: null } };
  }
}
export default PortfolioListPage;
