import { Portfolio } from "@/model/Portfolio";
import { ReactElement } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { tabletMedia } from "@/styles/mediaQuery";

interface HypeCardProps {
  portfolio: Portfolio;
}

const HypeCard = (props: HypeCardProps): ReactElement => {
  return (
    <DIV_HypeCard>
      <Link href={`/detail/${props.portfolio.id}`}>
        <Image
          src={props.portfolio.thumbnail?.url}
          alt={props.portfolio.thumbnail?.title}
          width={600}
          height={400}
        />

        <div className="card-hover">
          <div className="card-title">
            SM 엔터테인먼트 EXO D.O. 1st mini 앨범 Rose 오피셜 뮤직비디오 2D
            animation
          </div>
          <div className="card-designer">mareykrap / SM엔터테인먼트</div>
        </div>
      </Link>
    </DIV_HypeCard>
  );
};

const DIV_HypeCard = styled.div`
  position: relative;
  background: pink;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
  }

  .card-hover {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    top: 0;
    left: 0;
    padding: 17px 32px;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-end;
    color: #ffffff;
    background: #000000;

    .card-label {
      width: 28px;
      height: 28px;
      margin-bottom: 8px;
      border-radius: 50%;
      background: #ffffff;
    }

    .card-category {
      margin-bottom: 8px;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.5px;
      font-weight: 700;
    }

    .card-title {
      margin-bottom: 24px;
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.5px;
    }

    .card-designer {
      font-size: 15px;
      line-height: 24px;
      letter-spacing: -0.25px;
      font-weight: 400;
    }
  }

  &:hover {
    .card-hover {
      display: flex;
    }
  }

  ${tabletMedia} {
    .card-hover {
      top: unset;
      bottom: 0;
      height: 50%;
      padding: 24px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);

      .card-category {
        margin-bottom: 4px;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: -0.25px;
      }

      .card-title {
        margin-bottom: 16px;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.5px;
      }

      .card-designer {
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.25px;
      }
    }
  }
`;

export default HypeCard;
