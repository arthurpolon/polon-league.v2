import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Sidebar from '../components/Sidebar';

interface ISummonerPageProps {
  summonerName: string;
}

const SummonerPage = (props: ISummonerPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading</h1>;
  }

  const summonerCard = () => (
    <div className="flex p-9 justify-start items-center gap-6 bg-white dark:bg-slate-900 rounded-lg border-gray-300 dark:border-slate-700">
      <div className="rounded-full bg-gray-600 w-32 h-32" />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl bg-gradient-to-b from-pink-400 to-blue-700 text-transparent bg-clip-text font-bold">
          Poion - Level 300
        </h2>

        <div className="flex flex-col gap-1 text-slate-500 dark:text-slate-100 font-semibold">
          <span>Solo/Duo - Silver III</span>
          <span>Flex - Unranked</span>
        </div>
      </div>
    </div>
  );

  const victoryPercentageCard = () => (
    <div className="flex gap-12 items-center p-9 bg-white dark:bg-slate-900 rounded-lg border-gray-300 dark:border-slate-700">
      <div>
        <h2 className="text-2xl mb-4 bg-gradient-to-b from-pink-400 to-blue-700 text-transparent bg-clip-text font-bold">
          Victory Percentage
        </h2>

        <label className="relative mr-3 cursor-pointer group">
          <input
            name="radio"
            className="absolute inset-0 appearance-none peer cursor-pointer"
            type="radio"
            defaultChecked
          />
          <span className="px-3 py-2 font-semibold rounded bg-gray-400 dark:bg-gray-600 text-white group-hover:brightness-[0.9] peer-checked:bg-gradient-to-b peer-checked:text-white transition-all from-pink-400 to-blue-700">
            Solo/Duo
          </span>
        </label>
        <label className="relative cursor-pointer group">
          <input
            name="radio"
            className="absolute inset-0 appearance-none peer cursor-pointer"
            type="radio"
          />
          <span className="px-3 py-2 font-semibold rounded bg-gray-400 dark:bg-gray-600 text-white group-hover:brightness-[0.9] peer-checked:bg-gradient-to-b peer-checked:text-white transition-all from-pink-400 to-blue-700">
            Flex
          </span>
        </label>

        <div className="flex gap-6 mt-8">
          <div className="flex flex-col">
            <div className="text-center text-slate-500 font-bold text-lg mb-1 dark:text-slate-400">
              Played
            </div>
            <div className="text-center font-bold text-xl dark:text-slate-100">
              30
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-center text-slate-500 font-bold text-lg mb-1 dark:text-slate-400">
              Wins
            </div>
            <div className="text-center font-bold text-xl dark:text-slate-100">
              18
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-center text-slate-500 font-bold text-lg mb-1 dark:text-slate-400">
              Defeat
            </div>
            <div className="text-center font-bold text-xl dark:text-slate-100">
              12
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="rounded-full bg-gray-600 w-32 h-32" />
      </div>
    </div>
  );

  return (
    <main className="flex bg-pink-50 dark:bg-slate-800 min-w-screen min-h-screen">
      <Sidebar />
      <div>
        {summonerCard()}
        <div className="mt-12">{victoryPercentageCard()}</div>
      </div>
    </main>
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
