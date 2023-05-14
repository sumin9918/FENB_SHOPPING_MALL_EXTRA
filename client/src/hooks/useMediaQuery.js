import { useEffect, useState } from 'react';

const getMatches = query => {
  if (typeof window !== 'undefined') return window.matchMedia(query).matches;

  return false;
};

const useMediaQuery = query => {
  const [matches, setMatches] = useState(getMatches(query));

  const handleChange = () => {
    setMatches(getMatches(query));
  };

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
