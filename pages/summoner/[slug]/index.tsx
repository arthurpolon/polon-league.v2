import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Sidebar from '../components/Sidebar';

interface ISummonerPageProps {
  summonerName: string;
}

const SummonerPage = (props: ISummonerPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading</h1>;
  }

  console.log(props.summonerName);

  return (
    <main className="bg-pink-50 dark:bg-slate-800 min-w-screen min-h-screen">
      <Sidebar />
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ISummonerPageProps> = (context) => {
  const summonerName = context.params!.slug as string;

  return {
    props: { summonerName },
    revalidate: 1800, // 30 minutes
  };
};

export default SummonerPage;
