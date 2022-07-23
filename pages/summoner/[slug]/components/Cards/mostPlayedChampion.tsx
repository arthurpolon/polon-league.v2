const MostPlayedChampionCard = () => {
  return (
    <div className="w-fit flex flex-col justify-start items-center p-9 bg-white dark:bg-slate-900">
      <h2 className="text-2xl mb-4 bg-gradient-to-b from-pink-400 to-blue-700 text-transparent bg-clip-text font-bold">
        Most Played Champion
      </h2>
      <div className="rounded bg-gray-600 w-[200px] h-[380px]" />
      <span className="text-center text-slate-500 font-bold text-xl mt-4 dark:text-slate-400">
        Irelia - 19.000 pts
      </span>
    </div>
  );
};

export default MostPlayedChampionCard;
