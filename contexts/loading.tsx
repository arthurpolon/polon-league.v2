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
    router.events.on('routeChangeStart', () => setLoading(true));
    router.events.on('routeChangeComplete', () => setLoading(false));
    router.events.on('routeChangeError', () => setLoading(false));

    () => {
      router.events.off('routeChangeStart', () => setLoading(true));
      router.events.off('routeChangeComplete', () => setLoading(false));
      router.events.off('routeChangeError', () => setLoading(false));
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ loading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
