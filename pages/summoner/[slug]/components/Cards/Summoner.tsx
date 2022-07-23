import Image from 'next/image';
import { IRiotApiResponse } from 'types/riotApiResponse';

interface ISummonerCardProps {
  profileIcon: string;

  summoner: IRiotApiResponse['summoner'];
  rankedInfo: IRiotApiResponse['rankedInfo'];
}

const SummonerCard = ({
  summoner,
  rankedInfo,
  profileIcon,
}: ISummonerCardProps) => {
  const { soloRankedInfo, flexRankedInfo } = rankedInfo;

  const soloDuoRank = soloRankedInfo
    ? `${soloRankedInfo.tier.toLowerCase()} ${soloRankedInfo.rank}`
    : 'Unranked';

  const flexRank = flexRankedInfo
    ? `${flexRankedInfo.tier.toLowerCase()} ${flexRankedInfo.rank}`
    : 'Unranked';

  return (
    <div className="flex p-9 justify-start items-center gap-6 bg-white dark:bg-slate-900 rounded-lg border-gray-300 dark:border-slate-700">
      <div className="rounded-full relative overflow-hidden w-32 h-32">
        <Image src={profileIcon} priority layout="fill" />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl bg-gradient-to-b from-pink-400 to-blue-700 text-transparent bg-clip-text font-bold">
          {summoner.name} - Level {summoner.summonerLevel}
        </h2>

        <div className="flex flex-col gap-1 text-slate-500 dark:text-slate-100 font-semibold">
          <span className="capitalize">Solo/Duo - {soloDuoRank}</span>
          <span className="capitalize">Flex - {flexRank}</span>
        </div>
      </div>
    </div>
  );
};

export default SummonerCard;
