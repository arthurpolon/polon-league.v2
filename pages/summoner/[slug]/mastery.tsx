import axios from 'axios';
import { useState, useRef, useMemo } from 'react';
import LoadingCube from 'components/LoadingCube/LoadingCube';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { IDdragonApiResponse } from 'types/ddragonApiResponse';
import { IMastery, ISummoner } from 'types/riotApiResponse';
import Layout from './components/Layout';
import TableRow from './components/TableRow';

const TableHeads = [
  '#',
  'Name',
  'Mastery Level',
  'Mastery Points',
  'Last Time Played',
  'Chest Available',
];

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

type TMasteryResponse = {
  mastery: IMastery[];
  summoner: ISummoner;
};

const SummonerPage = () => {
  const router = useRouter();
  const summonerName = router.query.slug as string;

  const timeoutRef = useRef<NodeJS.Timeout>();

  const [inputValue, setInputValue] = useState('');

  const { data: riotData } = useSWR<TMasteryResponse>(
    `/api/riot/summoner/${summonerName}/mastery`,
    fetcher
  );

  const { data: ddragonData } = useSWR<IDdragonApiResponse>(
    '/api/ddragon',
    fetcher
  );

  const filteredMastery = useMemo(
    () =>
      riotData?.mastery.filter(({ championId }) =>
        ddragonData?.champions.data[championId].name
          .toLowerCase()
          .includes(inputValue.toLowerCase())
      ),
    [inputValue, riotData]
  );

  const tableHead = (label: string, idx: number) => (
    <th
      key={idx + label}
      className={`px-8 pt-8 pb-4 ${idx === 1 && 'text-left'}`}
    >
      {label}
    </th>
  );

  return (
    <Layout>
      {riotData && ddragonData ? (
        <div className="overflow-auto h-screen w-full bg-white dark:bg-slate-900">
          <div className="pl-8 pt-12">
            <h1 className="text-3xl font-bold dark:text-slate-100">
              Champions Mastery
            </h1>
            <label className="flex flex-col font-medium mt-8 dark:text-slate-100">
              Filter by name:
              <input
                type="text"
                className="border border-slate-400 rounded px-3 py-2 w-72 mt-1 font-normal bg-transparent dark:text-white"
                defaultValue={''}
                placeholder="Champion name"
                onChange={(e) => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);

                  timeoutRef.current = setTimeout(
                    () => setInputValue(e.target.value),
                    400
                  );
                }}
              />
            </label>
          </div>
          <table className="bg-white dark:bg-slate-900 rounded-lg min-w-[950px] w-full">
            <thead className="border-b border-b-slate-200 dark:border-b-slate-600 text-slate-400 dark:text-slate-300">
              <tr>{TableHeads.map(tableHead)}</tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600 dark:text-white text-center font-medium">
              {filteredMastery ? (
                filteredMastery.map((mastery, index) => (
                  <TableRow
                    key={mastery.championId}
                    mastery={mastery}
                    ddragonData={ddragonData}
                  />
                ))
              ) : (
                <>Nada pra mostrar</>
              )}
            </tbody>
          </table>
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
