import { useRef, useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { verifyQuery } from 'api/query';

const useIsSignInRef = () => {
  const { data: verify } = useQuery(verifyQuery());

  const isSignInRef = useRef(null);

  useEffect(() => {
    isSignInRef.current = verify;
  }, [verify]);

  return isSignInRef;
};

export default useIsSignInRef;
