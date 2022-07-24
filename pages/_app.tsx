import '../styles/globals.css';
import type { AppContext, AppProps } from 'next/app';
import cookies from 'next-cookies';
import { TTheme } from '../types/theme';
import { ThemeProvider } from '../contexts/theme';

interface ICustomAppProps {
  theme: TTheme;
}

const App = ({
  Component,
  pageProps,
  router,
  theme,
}: ICustomAppProps & AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

App.getInitialProps = ({ ctx }: AppContext): ICustomAppProps => ({
  theme: cookies(ctx).theme === 'dark' ? 'dark' : 'light', // light is default. As if the theme is 'undefined', 'light' will be returned
});

export default App;
