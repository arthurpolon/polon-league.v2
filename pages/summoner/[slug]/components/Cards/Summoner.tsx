const SummonerCard = () => {
  return (
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
};

export default SummonerCard;
