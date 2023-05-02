import { useEffect, useState } from 'react';

const getInitialTheme = () => {
  let initialTheme = localStorage.getItem('theme');

  if (!initialTheme) {
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
    initialTheme = matches ? 'dark' : 'light';
    localStorage.setItem('theme', initialTheme);
  }

  return initialTheme;
};

const useTheme = () => {
  const [colorScheme, setColorScheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem('theme', colorScheme);
  }, [colorScheme]);

  const toggleTheme = () => {
    const nextTheme = colorScheme === 'dark' ? 'light' : 'dark';

    setColorScheme(nextTheme);
  };
  return { toggleTheme, colorScheme };
};

export default useTheme;
