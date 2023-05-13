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

    if (matchMedia.onchange) {
      matchMedia.onchange(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.onchange) {
        matchMedia.onchange(handleChange);
      } else {
        matchMedia.addEventListener('change', handleChange);
      }
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
