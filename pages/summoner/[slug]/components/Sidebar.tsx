import ThemeSwitch from 'components/ThemeSwitch';
import Link from 'next/link';
import Logo from 'public/logo.svg';
import PersonIcon from 'public/person-icon.svg';
import MasteryIcon from 'public/mastery-icon.svg';
import chatIcon from 'public/chat-icon.svg';
import { useRouter } from 'next/router';

const links = (summonerName: string) => {
  const baseUrl = `/summoner/${summonerName}`;

  return [
    {
      label: 'Summoner Info',
      to: baseUrl,
      icon: PersonIcon,
    },
    {
      label: 'Champions Mastery',
      to: `${baseUrl}/champions-mastery`,
      icon: MasteryIcon,
    },
    {
      label: 'About Me',
      to: `${baseUrl}/about-me`,
      icon: chatIcon,
    },
  ];
};

const Sidebar = () => {
  const { asPath, query } = useRouter();

  const summonerName = query.slug as string;
  const currentPath = decodeURIComponent(asPath);

  const renderLinks = () =>
    links(summonerName).map((link) => {
      const isActive = link.to === currentPath;

      return (
        <Link href={link.to} key={link.label}>
          <a
            className={`flex justify-start items-center gap-4 pl-14 py-5 w-11/12 rounded-tr-full rounded-br-full ${
              isActive && 'bg-gradient-to-b from-pink-400 to-blue-700'
            }`}
          >
            <link.icon
              className={`w-8 ${isActive ? 'text-white' : 'text-pink-400'}`}
            />
            <span
              className={
                isActive ? 'text-white' : 'text-gray-600 dark:text-gray-100'
              }
            >
              {link.label}{' '}
            </span>
          </a>
        </Link>
      );
    });

  return (
    <div className="flex flex-col justify-between min-w-[20rem] min-h-screen border-r border-gray-300 bg-white dark:bg-slate-900 dark:border-slate-700">
      <div>
        <div className="flex justify-between items-center gap-2 px-6 py-6">
          <Link href="/">
            <button className="flex justify-center items-center gap-2">
              <Logo width={52} height={52} />
              <span className="bg-gradient-to-b from-pink-400 to-blue-700 text-transparent text-xl bg-clip-text font-bold">
                Polon League
              </span>
            </button>
          </Link>

          <ThemeSwitch />
        </div>

        <div className="mt-12">{renderLinks()}</div>
      </div>

      <div className="flex justify-center items-center p-8">
        <button
          type="button"
          className="text-white rounded font-normal p-4 bg-gradient-to-b from-pink-400 to-blue-700 hover:brightness-[0.9] transition-all"
        >
          Choose another summoner
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
