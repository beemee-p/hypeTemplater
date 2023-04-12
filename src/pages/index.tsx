import { ReactElement } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { Portfolio } from '@model/Portfolio';
import HypeBanner from '@components/list/HypeBanner';
import HypeFilter from '@components/list/HypeFilter';
import HypeList from '@components/list/HypeList';

interface PortfolioListProps {
  portfolios: Portfolio[];
}

const HypeMain = (props: PortfolioListProps): ReactElement => {
  props;
  return (
    <DIV_HypeMain>
      <HypeBanner />

      <DIV_HypeContent>
        <h1>
          CONFUSED KOREA <br />
          DAZED MOMENT
        </h1>
        <h5>
          Digital Media has become the most important but yet remains as an
          underdeveloped territory. Dazed & Confused Korea reinforces strong
          editorial team aiming to declare a new era for digital media. It
          utilizes advanced technology to create compelling fashion films, and
          expands its domain by working in collaboration with Korean social
          media networks to reach a leading position in the industry.
        </h5>

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
    </DIV_HypeMain>
  );
};

const DIV_HypeMain = styled.div``;
const DIV_HypeContent = styled.div`
  padding: 0 64px;
  background: #2f4f4f;

  > h1 {
    margin: 0;
    padding: 120px 0 20px;
    color: #ffffff;
    font-size: 40px;
    line-height: 56px;
    letter-spacing: -0.5px;
    font-weight: bold;
  }
  > h5 {
    color: #ffffff;
    font-size: 20px;
    letter-spacing: -0.5px;
    font-weight: 600;
    margin: 20px 0 60px;
  }
`;

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
