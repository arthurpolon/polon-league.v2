import Image from 'next/image';
import { formatNumber } from 'utils/formatNumber';

interface IMostPlayedChampionCardProps {
  mostPlayedChampion: { name: string; masteryPoints: number } | null;
}

const MostPlayedChampionCard = ({
  mostPlayedChampion,
}: IMostPlayedChampionCardProps) => {
  return (
    <div className="w-fit flex flex-col justify-start items-center p-9 bg-white dark:bg-slate-900">
      <h2 className="text-2xl mb-4 bg-gradient-to-b from-pink-400 to-blue-700 text-transparent bg-clip-text font-bold">
        Most Played Champion
      </h2>
      <div className="relative w-[200px] h-[380px] overflow-hidden rounded-md">
        {mostPlayedChampion ? (
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${mostPlayedChampion?.name}_0.jpg`}
            layout="fill"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-pink-400 to-blue-700 opacity-20" />
        )}
      </div>

      <span className="text-center text-slate-500 font-bold text-xl mt-4 dark:text-slate-400">
        {mostPlayedChampion ? (
          <>
            {mostPlayedChampion?.name} -{' '}
            {formatNumber(mostPlayedChampion?.masteryPoints)} pts
          </>
        ) : (
          'No games were found'
        )}
      </span>
    </div>
  );
};

export default MostPlayedChampionCard;
