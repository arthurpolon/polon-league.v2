import { format } from 'date-fns';
import Image from 'next/image';
import { memo } from 'react';
import { IDdragonApiResponse } from 'types/ddragonApiResponse';
import { IMastery } from 'types/riotApiResponse';
import { formatNumber } from 'utils/formatNumber';

interface ITableRowProps {
  mastery: IMastery;
  ddragonData: IDdragonApiResponse;
}

const TableRow = ({ mastery, ddragonData }: ITableRowProps) => {
  const champion = ddragonData.champions.data[mastery.championId];

  const imageSrc = `http://ddragon.leagueoflegends.com/cdn/${ddragonData?.versions[0]}/img/champion/${champion.image.full}`;

  return (
    <tr key={mastery.championId}>
      <td>{mastery.position}</td>
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
          <span className="rounded-full text-white dark:text-slate-100 bg-red-400 dark:bg-red-500 p-2">
            No
          </span>
        ) : (
          <span className="rounded-full text-white dark:text-slate-100 bg-green-500 dark:bg-green-700 p-2">
            Yes
          </span>
        )}
      </td>
    </tr>
  );
};

export default memo(TableRow);
