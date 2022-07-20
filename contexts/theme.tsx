import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { setState } from '../types/setState';
import { TTheme } from '../types/theme';

interface IThemeProviderProps {
  children: ReactNode;
  theme: TTheme;
}

interface IThemeContext {
  theme: TTheme;
  setTheme: setState<TTheme>;
  toggleTheme(): void;
  isDark: boolean;
}

const ThemeContext = createContext({} as IThemeContext);

export const ThemeProvider = (props: IThemeProviderProps) => {
  const [theme, setTheme] = useState<TTheme>(props.theme);

  const isDark = theme === 'dark';

  const toggleTheme = () =>
    setTheme((state) => (state === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.cookie = `theme=${theme}; path=/; expires=Tue, 19 Jul 2032 18:20:00 GMT`;

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
