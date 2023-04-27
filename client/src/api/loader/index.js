import { queryClient } from '../../components/GlobalProvider';
import { CARTS_QUERY_KEY } from '../../constants';
import {
  authQueryKey,
  carouselQueryKey,
  categoryQueryKey,
  couponsQueryKey,
  filteredProductsQueryKey,
  productsQueryKey,
  userQueryKey,
  wishListQueryKey,
} from '../../constants/queryKey';
import { getDecodeSearch } from '../../utils/location';
import { fetchCarts } from '../carts';
import { fetchFavorites } from '../favorites';
import {
  checkSignIn,
  fetchCarousel,
  fetchCategories,
  fetchCoupons,
  fetchFilteredProducts,
  fetchProducts,
  getUserInfo,
} from '../index';

export const productsQuery = () => ({
  queryKey: productsQueryKey,
  queryFn: fetchProducts,
  staleTime: 30000,
});

export const productsLoader = async () => {
  const { queryKey, queryFn } = productsQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

export const categoryQuery = () => ({
  queryKey: categoryQueryKey,
  queryFn: fetchCategories,
  retry: 0,
  staleTime: Infinity,
});

export const categoryLoader = async () => {
  const { queryKey, queryFn } = categoryQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
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

export const carouselQuery = () => ({
  queryKey: carouselQueryKey,
  queryFn: fetchCarousel,
});

export const carouselLoader = async () => {
  const { queryKey, queryFn } = carouselQuery();

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
  staleTime: 1000,
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

  return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
};

export const cartsQuery = () => ({
  queryKey: CARTS_QUERY_KEY,
  queryFn: fetchCarts,
});

export const cartsLoader = async () => {
  const { queryKey, queryFn } = cartsQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

export const userQuery = () => ({
  queryKey: userQueryKey,
  queryFn: getUserInfo,
  retry: 0,
  staleTime: 3000,
});

export const userLoader = async () => {
  const { queryKey, queryFn } = userQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};
export const couponsQuery = () => ({
  queryKey: couponsQueryKey,
  queryFn: fetchCoupons,
});

export const couponsLoader = async () => {
  const { queryKey, queryFn } = couponsQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};
