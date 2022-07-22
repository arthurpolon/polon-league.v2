import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import MostPlayedChampionCard from './components/Cards/mostPlayedChampion';
import SummonerCard from './components/Cards/Summoner';
import VictoryPercentageCard from './components/Cards/VictoryPercentage';
import Layout from './components/Layout';

interface ISummonerPageProps {
  summonerName: string;
}

const SummonerPage = (props: ISummonerPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading</h1>;
  }

  return (
    <Layout>
      <div>
        <SummonerCard />
        <div className="mt-12">
          <VictoryPercentageCard />
        </div>
        <div className="mt-12">
          <MostPlayedChampionCard />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ISummonerPageProps> = (context) => {
  const summonerName = context.params!.slug as string;

  return {
    props: { summonerName },
    revalidate: 1800, // 30 minutes
  };
};

export default SummonerPage;
