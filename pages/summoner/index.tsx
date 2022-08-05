import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitch from 'components/ThemeSwitch';
import { useTheme } from 'contexts/theme';

import Logo from 'public/logo.svg';

import HomeIcon from 'public/home-icon.svg';
import { FormEvent } from 'react';
import { useRouter } from 'next/router';

const FormPage = () => {
  const router = useRouter();
  const { isDark } = useTheme();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const summonerName = formData.get('summoner-name') as string;

    router.push(`/summoner/${summonerName}`);
  };

  return (
    <main className="w-screen h-screen bg-pink-50 relative z-0 dark:bg-slate-800">
      <div className="w-11/12 max-w-7xl mx-auto pt-10">
        <div className="flex justify-between items-center dark:text-gray-100">
          <Link href="/">
            <a className="flex w-fit">
              <HomeIcon className="mr-2" />
              <span className="font-medium text-lg">Back To Home</span>
            </a>
          </Link>

          <ThemeSwitch />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 flex flex-col w-11/12 max-w-lg p-8 rounded-md fixed center-absolute">
        <div className="flex flex-col justify-center items-center gap-2">
          <Logo />
          <span className="main-gradient text-transparent bg-clip-text font-bold">
            Polon League
          </span>
        </div>
        <h2 className="text-2xl text-center font-bold dark:text-gray-100 mt-8">
          Welcome Summoner
        </h2>
        <h1 className="text-sm text-slate-500 font-medium text-center mt-1">
          Enter your summoner name to start
        </h1>

        <form onSubmit={onSubmit} className="flex flex-col mt-8 gap-6">
          <input
            type="text"
            name="summoner-name"
            placeholder="Summoner name"
            className="border border-slate-400 rounded px-3 py-4 bg-transparent dark:text-white"
            required
          />
          <button
            type="submit"
            className="text-gray-100 py-4 font-medium rounded-lg main-gradient hover:brightness-[0.9] transition-all"
          >
            Continue
          </button>
        </form>
      </div>

      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Image
          src={isDark ? '/bg-waves-dark.svg' : '/bg-waves-light.svg'}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </main>
  );
};

export default FormPage;
