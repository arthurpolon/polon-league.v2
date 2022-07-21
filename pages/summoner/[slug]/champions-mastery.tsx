import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from './components/Layout';

interface ISummonerPageProps {
  summonerName: string;
}

const SummonerPage = (props: ISummonerPageProps) => {
  console.log(props.summonerName);

  return <Layout>Champions Mastery</Layout>;
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
