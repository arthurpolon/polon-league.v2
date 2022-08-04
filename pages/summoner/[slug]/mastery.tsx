import axios from 'axios';
import LoadingCube from 'components/LoadingCube/LoadingCube';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { IDdragonApiResponse } from 'types/ddragonApiResponse';
import { IMastery, ISummoner } from 'types/riotApiResponse';
import Layout from './components/Layout';
import ArrowLeftIcon from 'public/arrow-left-icon.svg';
import { useEffect, useState } from 'react';
import TableRow from './components/TableRow';

const ItemsPerPageOptions = [10, 15, 20, 50, 100];

const TableHeads = [
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

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [numberOfPages, setNumberOfPages] = useState(1);

  const [masteriesToRender, setMasteriesToRender] = useState<IMastery[]>([]);

  const { data: riotData } = useSWR<TMasteryResponse>(
    `/api/riot/summoner/${summonerName}/mastery`,
    fetcher
  );

  const { data: ddragonData } = useSWR<IDdragonApiResponse>(
    '/api/ddragon',
    fetcher
  );

  const tableHead = (label: string, idx: number) => (
    <th key={idx + label} className="px-8 pt-12 pb-4 first:text-left">
      {label}
    </th>
  );
  console.log({
    currentPage,
    mastery: riotData?.mastery,
    itemsPerPage,
    numberOfPages,
  });

  useEffect(() => {
    if (riotData) {
      const sliceStart =
        currentPage === 1 ? 0 : itemsPerPage * (currentPage - 1);

      const sliceEnd = itemsPerPage * currentPage;

      setMasteriesToRender(riotData.mastery.slice(sliceStart, sliceEnd));

      setNumberOfPages(Math.ceil(riotData.mastery.length / itemsPerPage));
    }
  }, [riotData, itemsPerPage, currentPage]);

  return (
    <Layout>
      {riotData && ddragonData ? (
        <div className="overflow-auto h-screen w-full bg-white dark:bg-slate-900">
          <h1 className="text-3xl font-bold dark:text-slate-100 pl-8 pt-12">
            Champions Mastery
          </h1>
          <table className="bg-white dark:bg-slate-900 rounded-lg min-w-[950px] w-full">
            <thead className="border-b border-b-slate-200 dark:border-b-slate-600 text-slate-400 dark:text-slate-300">
              <tr>{TableHeads.map(tableHead)}</tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600 dark:text-white text-center font-medium">
              {masteriesToRender.map((mastery) => (
                <TableRow
                  key={mastery.championId}
                  mastery={mastery}
                  ddragonData={ddragonData}
                />
              ))}
            </tbody>
          </table>
          <label>
            Champions per page
            <select
              name="itemsPerPage"
              onClick={(event) => {
                setItemsPerPage(
                  parseInt((event.target as HTMLSelectElement).value)
                );
                setCurrentPage(1);
              }}
            >
              {ItemsPerPageOptions.map((option, idx) => (
                <option
                  value={option}
                  key={idx + '' + option}
                  defaultValue="10"
                >
                  {option}
                </option>
              ))}
            </select>
          </label>
          <span>
            {currentPage === 1 ? 1 : itemsPerPage * (currentPage - 1) + 1}-
            {itemsPerPage * currentPage > riotData.mastery.length
              ? riotData.mastery.length
              : itemsPerPage * currentPage}{' '}
            of {riotData.mastery.length}
          </span>
          <button
            type="button"
            className="text-slate-600 dark:text-slate-400 text-lg px-4 py-2 rounded disabled:opacity-60 transition-all disabled:cursor-not-allowed"
            onClick={() => setCurrentPage((state) => state - 1)}
            disabled={currentPage === 1}
          >
            <ArrowLeftIcon />
          </button>
          <button
            type="button"
            className="text-slate-600 dark:text-slate-400 text-lg px-4 py-2 rounded disabled:opacity-60 transition-all disabled:cursor-not-allowed"
            onClick={() => setCurrentPage((state) => state + 1)}
            disabled={currentPage === numberOfPages}
          >
            <ArrowLeftIcon className="rotate-180" />
          </button>
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
