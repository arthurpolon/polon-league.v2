import Image from 'next/image';
import Link from 'next/link';

import HomeIcon from '../../public/home-icon.svg';

const SummonerPage = () => {
  return (
    <main className="w-11/12 max-w-7xl mx-auto mt-10">
      <Link href="/">
        <div className="cursor-pointer flex w-fit">
          <HomeIcon className="mr-2" />
          <span className="font-medium text-lg">Back To Home</span>
        </div>
      </Link>

      <div className="fixed inset-0 -z-50 pointer-events-none">
        <Image src="/waves-background.jpg" layout="fill" objectFit="cover" />
      </div>
    </main>
  );
};

export default SummonerPage;
