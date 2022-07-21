import MoonIcon from 'public/moon-icon.svg';
import SunIcon from 'public/sun-icon.svg';
import { useTheme } from '../contexts/theme';

const ThemeSwitch = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="border-2 p-2 border-black rounded-md dark:border-gray-100 relative w-10 h-10"
    >
      {isDark ? (
        <SunIcon className="absolute text-gray-100 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
      ) : (
        <MoonIcon className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
      )}
    </button>
  );
};

export default ThemeSwitch;
