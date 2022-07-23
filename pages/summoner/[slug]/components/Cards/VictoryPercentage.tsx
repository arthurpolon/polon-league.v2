import CircleProgress from 'components/CircleProgress';
import { useState } from 'react';
import { IRiotApiResponse } from 'types/riotApiResponse';
import OkEmote from 'public/okay-emote.webp';
import Image from 'next/image';

interface IVictoryPercentageCardProps {
  ranked: IRiotApiResponse['ranked'];
}

type TRankedType = keyof IRiotApiResponse['ranked'];

const VictoryPercentageCard = ({ ranked }: IVictoryPercentageCardProps) => {
  const [rankedType, setRankedType] = useState<TRankedType>('soloRanked');

  const currentRank = ranked[rankedType];

  const getWinPercentage = () => {
    if (!currentRank) {
      return 0;
    }

    const totalMatches = currentRank.wins + currentRank.losses;

    const winsPercentage = (currentRank.wins * 100) / totalMatches;

    return Math.round(winsPercentage * 10) / 10; // limit to 1 decimal place
  };

  const winPercentage = getWinPercentage();

  return (
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
            onClick={() => setRankedType('soloRanked')}
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
            onClick={() => setRankedType('flexRanked')}
          />
          <span className="px-3 py-2 font-semibold rounded bg-gray-400 dark:bg-gray-600 text-white group-hover:brightness-[0.9] peer-checked:bg-gradient-to-b peer-checked:text-white transition-all from-pink-400 to-blue-700">
            Flex
          </span>
        </label>

        <div className="flex gap-6 mt-8">
          {currentRank ? (
            <>
              <div className="flex flex-col">
                <div className="text-center text-slate-500 font-bold text-lg mb-1 dark:text-slate-400">
                  Played
                </div>
                <div className="text-center font-bold text-xl dark:text-slate-100">
                  {currentRank.wins + currentRank.losses}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-center text-slate-500 font-bold text-lg mb-1 dark:text-slate-400">
                  Wins
                </div>
                <div className="text-center font-bold text-xl dark:text-slate-100">
                  {currentRank.wins}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-center text-slate-500 font-bold text-lg mb-1 dark:text-slate-400">
                  Defeat
                </div>
                <div className="text-center font-bold text-xl dark:text-slate-100">
                  {currentRank.losses}
                </div>
              </div>
            </>
          ) : (
            <span className="text-center text-slate-500 font-bold text-xl mt-4 dark:text-slate-400">
              This player is unranked
            </span>
          )}
        </div>
      </div>

      <div className="relative">
        <span className="text-3xl bg-gradient-to-b from-pink-400 to-blue-700 text-transparent bg-clip-text font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {winPercentage === 0 ? (
            <Image src={OkEmote} layout="fixed" width={90} height={90} />
          ) : (
            `${winPercentage}%`
          )}
        </span>

        <CircleProgress percentage={winPercentage || 100} />
      </div>
    </div>
  );
};

export default VictoryPercentageCard;
