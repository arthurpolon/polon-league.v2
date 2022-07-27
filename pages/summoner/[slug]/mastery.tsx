import axios from 'axios';
import LoadingCube from 'components/LoadingCube/LoadingCube';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import useSWR from 'swr';
import { IDdragonApiResponse } from 'types/ddragonApiResponse';
import { IMastery, ISummoner } from 'types/riotApiResponse';
import { formatNumber } from 'utils/formatNumber';
import Layout from './components/Layout';
import Image from 'next/image';

const TableHeads = [
  'Name',
  'Mastery Level',
  'Mastery Points',
  'Last Time Played',
  'Chest Available',
];

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

type IMasteryResponse = {
  mastery: IMastery[];
  summoner: ISummoner;
};

const SummonerPage = () => {
  const router = useRouter();
  const summonerName = router.query.slug as string;

  const { data: riotData } = useSWR<IMasteryResponse>(
    `/api/riot/summoner/${summonerName}/mastery`,
    fetcher
  );

  const { data: ddragonData } = useSWR<IDdragonApiResponse>(
    '/api/ddragon',
    fetcher
  );

  console.log(riotData, ddragonData);

  const tableHead = (label: string, idx: number) => (
    <th key={idx + label} className=" px-8 pt-12 pb-4">
      {label}
    </th>
  );

  const tableRow = (mastery: IMastery) => {
    const champion = ddragonData!.champions.data[mastery.championId];

    console.log(champion.name, champion.key);

    const imageSrc = `http://ddragon.leagueoflegends.com/cdn/${ddragonData?.versions[0]}/img/champion/${champion.image.full}`;

    return (
      <tr key={mastery.championId}>
        <td className="px-8 py-8">
          <span className="flex items-center gap-4">
            <div className="relative w-12 h-12">
              <Image src={imageSrc} layout="fill" />
            </div>
            {champion.name}
          </span>
        </td>
        <td>{mastery.championLevel}</td>
        <td>{formatNumber(mastery.championPoints)}</td>
        <td>{format(new Date(mastery.lastPlayTime), "MMM dd',' yyyy")}</td>
        <td>
          {mastery.chestGranted ? (
            <span className="rounded-full text-white dark:text-slate-100 bg-green-500 dark:bg-green-700 p-2">
              Yes
            </span>
          ) : (
            <span className="rounded-full text-white dark:text-slate-100 bg-red-400 dark:bg-red-500 p-2">
              No
            </span>
          )}
        </td>
      </tr>
    );
  };

  return (
    <Layout>
      {riotData && ddragonData ? (
        <div className="flex justify-center items-center mx-auto">
          <div className="max-h-[80vh] overflow-auto">
            <table className="bg-white dark:bg-slate-900 rounded-lg">
              <thead className="text-slate-600 dark:text-slate-300">
                <tr>{TableHeads.map(tableHead)}</tr>
              </thead>
              <tbody className="dark:text-white text-center font-medium">
                {riotData.mastery.map(tableRow)}
              </tbody>
            </table>
          </div>
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
