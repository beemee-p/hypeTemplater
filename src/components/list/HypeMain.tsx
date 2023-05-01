import { ReactElement } from "react";
import styled from "styled-components";
import { Portfolio } from "@model/Portfolio";
import HypeBanner from "@components/list/HypeBanner";
import HypeFilter from "@components/list/HypeFilter";
import HypeList from "@components/list/HypeList";
import { tabletMedia } from "@/styles/mediaQuery";

interface PortfolioListProps {
  portfolios: Portfolio[];
}

const HypeMain = (props: PortfolioListProps): ReactElement => {
  function handleScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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

        <div className="hype-list">
          <HypeFilter />
          <HypeList portfolios={props.portfolios} />
        </div>
      </DIV_HypeContent>

      <button className="scroll-btn" onClick={handleScroll}>
        ▲
      </button>
    </DIV_HypeMain>
  );
};

const DIV_HypeMain = styled.div`
  .scroll-btn {
    position: fixed;
    bottom: 0;
    left: 50%;
  }
`;

const DIV_HypeContent = styled.div`
  padding: 0 64px;
  background: #07303b;

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

  .hype-list {
    display: flex;
  }

  ${tabletMedia} {
    > h1 {
      padding: 80px 0 0;
      font-size: 22px;
      font-weight: 800;
      line-height: 32px;
    }

    .bbs-list {
      flex-direction: column;
    }
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
