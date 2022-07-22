import CircleProgress from 'components/CircleProgress';

const VictoryPercentageCard = () => {
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

      <div className="relative">
        <span className="text-3xl bg-gradient-to-b from-pink-400 to-blue-700 text-transparent bg-clip-text font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          63%
        </span>

        <CircleProgress percentage={63} />
      </div>
    </div>
  );
};

export default VictoryPercentageCard;
