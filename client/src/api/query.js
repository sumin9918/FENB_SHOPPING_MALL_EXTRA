import { fetchCarts } from './carts';
import { CARTS_QUERY_KEY, ADDRESS_QUERY_KEY } from '../constants';
import {
  authQueryKey,
  slidesQueryKey,
  couponsQueryKey,
  historyQueryKey,
  productsQueryKey,
  wishListQueryKey,
  pageProductsQueryKey,
} from '../constants/queryKey';
import { fetchFavorites } from './favorites';
import {
  requestVerify,
  fetchSlides,
  fetchCoupons,
  fetchFilteredProducts,
  fetchHistory,
  fetchPageProducts,
  fetchProducts,
  fetchUser,
} from './fetch';

export const productsQuery = options => ({
  queryKey: productsQueryKey,
  queryFn: fetchProducts,
  staleTime: 30000,
  ...options,
});

const PAGE_SIZE = 12;

export const pageProductsQuery = search => ({
  queryKey: [...pageProductsQueryKey, search].filter(str => str),
  queryFn: ({ pageParam = 1 }) => fetchPageProducts(pageParam, PAGE_SIZE),
  getNextPageParam: (lastPage, allPages) => (lastPage.products.length === PAGE_SIZE ? allPages.length + 1 : undefined),
});

export const filteredProductsQuery = (search, searchValue) => ({
  queryKey: [...pageProductsQueryKey, searchValue],
  queryFn: fetchFilteredProducts(search),
});

export const slidesQuery = options => ({
  queryKey: slidesQueryKey,
  queryFn: fetchSlides,
  ...options,
});

export const verifyQuery = options => ({
  queryKey: authQueryKey,
  queryFn: requestVerify,
  retry: 0,
  staleTime: 3000,
  ...options,
});

export const favoritesQuery = options => ({
  queryKey: wishListQueryKey,
  queryFn: fetchFavorites,
  ...options,
});

export const cartsQuery = options => ({
  queryKey: CARTS_QUERY_KEY,
  queryFn: fetchCarts,
  retry: 0,
  staleTime: 3000,
  ...options,
});

export const userQuery = options => ({
  queryKey: ADDRESS_QUERY_KEY,
  queryFn: fetchUser,
  retry: 0,
  staleTime: 3000,
  ...options,
});

export const couponsQuery = options => ({
  queryKey: couponsQueryKey,
  queryFn: fetchCoupons,
  retry: 0,
  staleTime: 3000,
  ...options,
});

export const historyQuery = ({ queryKey, ...options } = {}) => ({
  queryKey: [...historyQueryKey, queryKey],
  queryFn: fetchHistory,
  retry: 0,
  staleTime: 3000,
  ...options,
});
