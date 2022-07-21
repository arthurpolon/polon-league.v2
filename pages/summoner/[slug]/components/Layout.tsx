import LoadingCube from 'components/LoadingCube/LoadingCube';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const { isFallback } = useRouter();

  return (
    <main className="flex bg-pink-50 dark:bg-slate-800 min-w-screen min-h-screen">
      <Sidebar />

      {isFallback ? (
        <div className="flex justify-center items-center min-h-screen mx-auto">
          <LoadingCube />
        </div>
      ) : (
        children
      )}
    </main>
  );
};

export default Layout;