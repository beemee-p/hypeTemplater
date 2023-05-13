import { ReactElement } from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { Portfolio } from '@model/Portfolio';

const PortfolioList = (): ReactElement => {
  const portfolios = useSWR<Portfolio[]>(['/api/portfolios']);
  return (
    <section>
      <h1>LIST PAGE</h1>
      {/* TODO:GRID Component*/}
      {portfolios.data?.map((portfolio: Portfolio) => (
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
          <p>{portfolio.user.userRole}</p>
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

export default PortfolioList;
