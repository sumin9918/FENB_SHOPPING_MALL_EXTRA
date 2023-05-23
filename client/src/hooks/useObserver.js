import { useEffect, useRef } from 'react';

const useObserver = callback => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) callback();
        });
      },
      { threshold: 0.7 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [callback]);

  return ref;
};

export default useObserver;
