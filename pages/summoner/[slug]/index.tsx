import axios from 'axios';
import LoadingCube from 'components/LoadingCube/LoadingCube';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { IDdragonApiResponse } from 'types/ddragonApiResponse';
import { IRiotApiResponse } from 'types/riotApiResponse';
import MostPlayedChampionCard from './components/Cards/MostPlayedChampion';
import SummonerCard from './components/Cards/Summoner';
import VictoryPercentageCard from './components/Cards/VictoryPercentage';
import Layout from './components/Layout';

interface ISummonerPageProps {
  profileIcon: string;
  mostPlayedChampion: { name: string; masteryPoints: number } | null;

  summoner: IRiotApiResponse['summoner'];
  ranked: IRiotApiResponse['ranked'];
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const SummonerPage = (props: ISummonerPageProps) => {
  const router = useRouter();

  const summonerName = router.query.slug as string;

  const { data: riotData } = useSWR<IRiotApiResponse>(
    `/api/riot/summoner/${summonerName}`,
    fetcher
  );

  const { data: ddragonData } = useSWR<IDdragonApiResponse>(
    '/api/ddragon',
    fetcher
  );

  const profileIcon = `https://ddragon.leagueoflegends.com/cdn/${ddragonData?.versions[0]}/img/profileicon/${riotData?.summoner.profileIconId}.png`;

  return (
    <Layout>
      {riotData && ddragonData ? (
        <div className="flex flex-wrap justify-center items-center h-fit m-auto gap-12 py-12">
          <div className="flex flex-col gap-24">
            <SummonerCard
              summoner={riotData.summoner}
              ranked={riotData.ranked}
              profileIcon={profileIcon}
            />
            <VictoryPercentageCard ranked={riotData.ranked} />
          </div>

          <MostPlayedChampionCard
            mastery={riotData.mastery}
            champions={ddragonData.champions}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen mx-auto">
          <LoadingCube />
        </div>
      )}
    </Layout>
  );
};

export default SummonerPage;
