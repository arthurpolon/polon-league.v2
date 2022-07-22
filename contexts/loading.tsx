import { Router } from 'next/router';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ILoadingProviderProps {
  children: ReactNode;
  router: Router;
}

interface ILoadingContext {
  loading: boolean;
}

const LoadingContext = createContext({} as ILoadingContext);

export const LoadingProvider = ({
  router,
  children,
}: ILoadingProviderProps) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleStart = () => {
      timeout = setTimeout(() => setLoading(true), 1000);
    };

    const handleComplete = () => {
      clearTimeout(timeout);
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    () => {
      clearTimeout(timeout);
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  return (
    <LoadingContext.Provider value={{ loading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
