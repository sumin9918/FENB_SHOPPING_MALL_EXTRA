import {
  PRODUCTS_QUERY_KEY,
  PAGE_PRODUCTS_QUERY_KEY,
  WISHLIST_QUERY_KEY,
  AUTH_QUERY_KEY,
  SLIDES_QUERY_KEY,
  COUPONS_QUERY_KEY,
  HISTORY_QUERY_KEY,
  ADDRESS_QUERY_KEY,
  CARTS_QUERY_KEY,
} from '../constants';
import {
  requestVerify,
  fetchSlides,
  fetchCoupons,
  fetchFilteredProducts,
  fetchHistory,
  fetchPageProducts,
  fetchProducts,
  fetchUser,
  fetchFavorites,
  fetchCarts,
} from './fetch';

export const productsQuery = options => ({
  queryKey: PRODUCTS_QUERY_KEY,
  queryFn: fetchProducts,
  retry: 0,
  staleTime: 3000,
  ...options,
});

const PAGE_SIZE = 12;

export const pageProductsQuery = search => ({
  queryKey: [...PAGE_PRODUCTS_QUERY_KEY, search].filter(str => str),
  queryFn: ({ pageParam = 1 }) => fetchPageProducts(pageParam, PAGE_SIZE),
  getNextPageParam: (lastPage, allPages) => (lastPage.products.length === PAGE_SIZE ? allPages.length + 1 : undefined),
  retry: 0,
  staleTime: 3000,
});

export const filteredProductsQuery = (search, searchValue) => ({
  queryKey: [...PAGE_PRODUCTS_QUERY_KEY, searchValue],
  queryFn: fetchFilteredProducts(search),
  retry: 0,
  staleTime: 3000,
});

export const slidesQuery = options => ({
  queryKey: SLIDES_QUERY_KEY,
  queryFn: fetchSlides,
  retry: 0,
  staleTime: 3000,
  ...options,
});

export const verifyQuery = options => ({
  queryKey: AUTH_QUERY_KEY,
  queryFn: requestVerify,
  retry: 0,
  staleTime: 3000,
  ...options,
});

export const favoritesQuery = options => ({
  queryKey: WISHLIST_QUERY_KEY,
  queryFn: fetchFavorites,
  retry: 0,
  // staleTime: 3000,
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
  queryKey: COUPONS_QUERY_KEY,
  queryFn: fetchCoupons,
  retry: 0,
  staleTime: 3000,
  ...options,
});

export const historyQuery = ({ queryKey, ...options } = {}) => ({
  queryKey: [...HISTORY_QUERY_KEY, queryKey],
  queryFn: fetchHistory,
  retry: 0,
  staleTime: 3000,
  ...options,
});
