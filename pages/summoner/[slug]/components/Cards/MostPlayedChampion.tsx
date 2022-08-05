import Image from 'next/image';
import { IDdragonApiResponse } from 'types/ddragonApiResponse';
import { IRiotApiResponse } from 'types/riotApiResponse';
import { formatNumber } from 'utils/formatNumber';

interface IMostPlayedChampionCardProps {
  mastery: IRiotApiResponse['mastery'];
  champions: IDdragonApiResponse['champions'];
}

const MostPlayedChampionCard = ({
  mastery,
  champions,
}: IMostPlayedChampionCardProps) => {
  const mostPlayedChampion =
    mastery.length > 0 ? champions.data[mastery[0].championId] : null;

  return (
    <div className="w-fit flex flex-col justify-start items-center p-9 bg-white dark:bg-slate-900">
      <h2 className="text-2xl mb-4 main-gradient text-transparent bg-clip-text font-bold">
        Most Played Champion
      </h2>
      <div className="relative w-[200px] h-[380px] overflow-hidden rounded-md">
        {mostPlayedChampion ? (
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${mostPlayedChampion.id}_0.jpg`}
            layout="fill"
            priority
          />
        ) : (
          <div className="absolute inset-0 main-gradient opacity-20" />
        )}
      </div>

      <span className="text-center text-slate-500 font-bold text-xl mt-4 dark:text-slate-400">
        {mostPlayedChampion ? (
          <>
            {mostPlayedChampion.name} -{' '}
            {formatNumber(mastery[0].championPoints)} pts
          </>
        ) : (
          'No games were found'
        )}
      </span>
    </div>
  );
};

export default MostPlayedChampionCard;
