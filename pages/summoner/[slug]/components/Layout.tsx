import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <main className="flex bg-pink-50 dark:bg-slate-800 min-w-screen min-h-screen">
      <Sidebar />
      {children}
    </main>
  );
};

export default Layout;
