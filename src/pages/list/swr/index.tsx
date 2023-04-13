import { ReactElement } from 'react';
import { Portfolio } from '@model/Portfolio';
import { SWRConfig } from 'swr';
import PortfolioList from './PortfolioList';
import { AxiosGet } from '@api/fetcher';
import { Fallback } from '@api/types';

type PortfolioListProps = Fallback<{
  portfolioList: Portfolio[];
}>;

const PortfolioListPage = (props: PortfolioListProps): ReactElement => {
  return (
    <SWRConfig value={{ fallback: props.fallback, fetcher: AxiosGet }}>
      <PortfolioList />
    </SWRConfig>
  );
};

export async function getServerSideProps() {
  try {
    const data = await AxiosGet('/api/portfolios');
    return {
      props: {
        fallback: { ['/api/portfolios']: data },
      },
    };
  } catch (err) {
    console.error(err);
    return { props: { fallback: { ['/api/portfolios']: null } } };
  }
}
export default PortfolioListPage;
