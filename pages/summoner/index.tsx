import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../../contexts/theme';

import HomeIcon from '../../public/home-icon.svg';
import MoonIcon from '../../public/moon-icon.svg';
import SunIcon from '../../public/sun-icon.svg';

const SummonerPage = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <main className="w-11/12 max-w-7xl mx-auto mt-10">
      <div className="flex justify-between items-center">
        <Link href="/">
          <div className="cursor-pointer flex w-fit">
            <HomeIcon className="mr-2" />
            <span className="font-medium text-lg">Back To Home</span>
          </div>
        </Link>

        <button
          type="button"
          onClick={toggleTheme}
          className="border-2 p-2 border-black rounded-md dark:border-gray-200 relative w-10 h-10"
        >
          {isDark ? (
            <SunIcon className="absolute text-gray-300 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
          ) : (
            <MoonIcon className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
          )}
        </button>
      </div>

      <div className="fixed inset-0 -z-50 pointer-events-none">
        <Image src="/waves-background.jpg" layout="fill" objectFit="cover" />
      </div>
    </main>
  );
};

export default SummonerPage;
