import { GetStaticPaths, GetStaticProps } from 'next';
import { DdragonApi } from 'services/ddragon';
import { RiotApi } from 'services/riot';
import { IRiotApiResponse } from 'types/riotApiResponse';
import MostPlayedChampionCard from './components/Cards/MostPlayedChampion';
import SummonerCard from './components/Cards/Summoner';
import VictoryPercentageCard from './components/Cards/VictoryPercentage';
import Layout from './components/Layout';

interface ISummonerPageProps {
  profileIcon: string;
  mostPlayedChampion: { name: string; masteryPoints: number } | null;

  summoner: IRiotApiResponse['summoner'];
  rankedInfo: IRiotApiResponse['rankedInfo'];
}

const SummonerPage = (props: ISummonerPageProps) => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center items-center h-fit m-auto gap-12 py-12">
        <div className="flex flex-col gap-24">
          <SummonerCard
            summoner={props.summoner}
            rankedInfo={props.rankedInfo}
            profileIcon={props.profileIcon}
          />
          <VictoryPercentageCard rankedInfo={props.rankedInfo} />
        </div>

        <MostPlayedChampionCard mostPlayedChampion={props.mostPlayedChampion} />
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

export const getStaticProps: GetStaticProps<ISummonerPageProps> = async (
  context
) => {
  const summonerName = context.params!.slug as string;

  const riotApi = new RiotApi(process.env.RIOT_DEVELOPMENT_KEY || '');

  try {
    const [riotApiData, ddragonApiData] = await Promise.all([
      await riotApi.getAll(summonerName),
      await DdragonApi.getAll(),
    ]);

    const { champions, gameVersions } = ddragonApiData;
    const { summoner, rankedInfo, championsMastery } = riotApiData;

    const findMostPlayedChampion =
      championsMastery.length > 0
        ? Object.values(champions.data).find(
            (value) => value.key === championsMastery[0].championId.toString()
          )
        : null;

    const profileIcon = `https://ddragon.leagueoflegends.com/cdn/${gameVersions[0]}/img/profileicon/${summoner.profileIconId}.png`;

    return {
      props: {
        profileIcon,
        mostPlayedChampion: findMostPlayedChampion
          ? {
              name: findMostPlayedChampion.name,
              masteryPoints: championsMastery[0].championPoints,
            }
          : null,

        summoner: summoner,
        rankedInfo: rankedInfo,
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
