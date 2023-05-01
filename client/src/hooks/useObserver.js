import { useEffect, useRef } from 'react';

const useObserver = callback => {
  const ref = useRef(null);
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) callback();
      });
    },
    { threshold: 0.7 }
  );

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useObserver;
