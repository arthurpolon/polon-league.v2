import Image from 'next/image';
import { IRiotApiResponse } from 'types/riotApiResponse';

interface ISummonerCardProps {
  profileIcon: string;

  summoner: IRiotApiResponse['summoner'];
  ranked: IRiotApiResponse['ranked'];
}

const SummonerCard = ({
  summoner,
  ranked,
  profileIcon,
}: ISummonerCardProps) => {
  const { soloRanked, flexRanked } = ranked;

  const soloDuoRank = soloRanked
    ? `${soloRanked.tier.toLowerCase()} ${soloRanked.rank}`
    : 'Unranked';

  const flexRank = flexRanked
    ? `${flexRanked.tier.toLowerCase()} ${flexRanked.rank}`
    : 'Unranked';

  return (
    <div className="flex p-9 justify-start items-center gap-6 bg-white dark:bg-slate-900 rounded-lg border-gray-300 dark:border-slate-700">
      <div className="rounded-full relative overflow-hidden w-32 h-32">
        <Image src={profileIcon} priority layout="fill" />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl main-gradient text-transparent bg-clip-text font-bold">
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
