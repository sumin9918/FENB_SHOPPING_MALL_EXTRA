import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { favoritesQuery, verifyQuery } from 'api/query';

const useIsFavorite = id => {
  const { data: favorites } = useQuery(favoritesQuery());
  const { data: verify } = useQuery(verifyQuery());

  const [isFavorite, setIsFavorite] = useState(verify ? favorites.some(product => product.id === id) : false);

  return { isFavorite, setIsFavorite };
};

export default useIsFavorite;
