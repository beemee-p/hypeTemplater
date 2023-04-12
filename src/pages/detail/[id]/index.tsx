import React, { ReactElement } from 'react';
import { Portfolio } from '@/model/Portfolio';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';

interface PortfolioDetailProps {
  portfolios: Portfolio[];
}

const PortfolioDetail = (props: PortfolioDetailProps): ReactElement => {
  const router = useRouter();
  const { id } = router.query;
  const portfolio = props.portfolios.find((v) => id && v.id === +id);

  return (
    <ARTICLE_Card key={portfolio?.id}>
      <Image
        src={portfolio?.thumbnail?.url || ''}
        alt={portfolio?.thumbnail.title || ''}
        width={600}
        height={400}
      />

      <h3>{portfolio?.title}</h3>
      <p>{portfolio?.user.name}</p>
    </ARTICLE_Card>
  );
};

const ARTICLE_Card = styled.article`
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

export default PortfolioDetail;
