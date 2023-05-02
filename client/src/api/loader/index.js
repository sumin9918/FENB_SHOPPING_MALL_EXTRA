import { queryClient } from '../../components/GlobalProvider';
import { CARTS_QUERY_KEY, ADDRESS_QUERY_KEY } from '../../constants';
import {
  authQueryKey,
  slidesQueryKey,
  couponsQueryKey,
  filteredProductsQueryKey,
  historyQueryKey,
  productsQueryKey,
  wishListQueryKey,
} from '../../constants/queryKey';
import { getDecodeSearch } from '../../utils/location';
import { fetchCarts } from '../carts';
import { fetchFavorites } from '../favorites';
import {
  checkSignIn,
  fetchSlides,
  fetchCoupons,
  fetchFilteredProducts,
  fetchHistory,
  fetchPageProducts,
  fetchProducts,
  getUserInfo,
} from '../index';

export const productsQuery = options => ({
  queryKey: productsQueryKey,
  queryFn: fetchProducts,
  staleTime: 30000,
  ...options,
});

export const productsLoader = async () => {
  const { queryKey, queryFn } = productsQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

const PAGE_SIZE = 12;

export const pageProductsQuery = (search = 'all') => ({
  queryKey: [...productsQueryKey, search],
  queryFn: ({ pageParam = 1 }) => fetchPageProducts(pageParam, PAGE_SIZE),
  getNextPageParam: (lastPage, allPages) => (lastPage.products.length === PAGE_SIZE ? allPages.length + 1 : undefined),
});

export const pageProductsLoader = async (search = 'all') => {
  const { queryKey, queryFn } = pageProductsQuery(search);

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchInfiniteQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

export const filteredProductsQuery = (search, searchValue) => ({
  queryKey: filteredProductsQueryKey(searchValue),
  queryFn: async () => {
    const data = await fetchFilteredProducts(search);
    return data;
  },
});

export const filteredProductsLoader = async params => {
  const { search: rawSearch } = new URL(params.request.url);
  const { search, searchValue } = getDecodeSearch(rawSearch);
  const { queryKey, queryFn } = filteredProductsQuery(search, searchValue);

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

export const slidesQuery = () => ({
  queryKey: slidesQueryKey,
  queryFn: fetchSlides,
});

export const slidesLoader = async () => {
  const { queryKey, queryFn } = slidesQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

export const verifyQuery = () => ({
  queryKey: authQueryKey,
  queryFn: checkSignIn,
  retry: 0,
  staleTime: 3000,
});

export const verifyLoader = async () => {
  const { queryKey, queryFn } = verifyQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

export const favoritesQuery = () => ({
  queryKey: wishListQueryKey,
  queryFn: fetchFavorites,
});

export const favoritesLoader = async () => {
  const { queryKey, queryFn } = favoritesQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

export const cartsQuery = options => ({
  queryKey: CARTS_QUERY_KEY,
  queryFn: fetchCarts,
  retry: 0,
  staleTime: 3000,
  ...options,
});

export const cartsLoader = async () => {
  const { queryKey, queryFn } = cartsQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

export const userQuery = options => ({
  queryKey: ADDRESS_QUERY_KEY,
  queryFn: getUserInfo,
  retry: 0,
  staleTime: 3000,
  ...options,
});

export const userLoader = async () => {
  const { queryKey, queryFn } = userQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

export const couponsQuery = options => ({
  queryKey: couponsQueryKey,
  queryFn: fetchCoupons,
  retry: 0,
  staleTime: 3000,
  ...options,
});

export const couponsLoader = async () => {
  const { queryKey, queryFn } = couponsQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

export const historyQuery = options => ({
  queryKey: historyQueryKey,
  queryFn: fetchHistory,
  retry: 0,
  staleTime: 3000,
  ...options,
});

export const historyLoader = async () => {
  const { queryKey, queryFn } = historyQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};
