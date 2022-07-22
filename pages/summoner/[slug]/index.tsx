import { GetStaticPaths, GetStaticProps } from 'next';
import { RiotApi } from 'services/riot';
import { IRiotApiResponse } from 'types/riotApiResponse';
import MostPlayedChampionCard from './components/Cards/mostPlayedChampion';
import SummonerCard from './components/Cards/Summoner';
import VictoryPercentageCard from './components/Cards/VictoryPercentage';
import Layout from './components/Layout';

const SummonerPage = (props: IRiotApiResponse) => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center items-center h-fit m-auto gap-12 py-12">
        <div className="flex flex-col gap-24">
          <SummonerCard />
          <VictoryPercentageCard />
        </div>

        <MostPlayedChampionCard />
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

export const getStaticProps: GetStaticProps<IRiotApiResponse> = async (
  context
) => {
  const summonerName = context.params!.slug as string;

  const riotApi = new RiotApi(process.env.RIOT_DEVELOPMENT_KEY || '');

  try {
    const { summoner, rankedInfo, championsMastery } = await riotApi.getAll(
      summonerName
    );

    return {
      props: {
        summoner,
        rankedInfo,
        championsMastery,
      },
      revalidate: 60 * 60 * 0.5 /* 30 minutes */,
    };
  } catch (err) {
    console.log(err);

    return {
      notFound: true,
    };
  }
};

export default SummonerPage;
