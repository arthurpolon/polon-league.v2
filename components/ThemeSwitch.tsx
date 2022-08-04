import MoonIcon from 'public/moon-icon.svg';
import SunIcon from 'public/sun-icon.svg';
import { useTheme } from '../contexts/theme';

const ThemeSwitch = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="border-2 p-2 border-slate-700 rounded-md dark:border-gray-100 relative w-10 h-10"
    >
      {isDark ? (
        <SunIcon className="center-absolute text-gray-100" />
      ) : (
        <MoonIcon className="center-absolute text-slate-700" />
      )}
    </button>
  );
};

export default ThemeSwitch;
