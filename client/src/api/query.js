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
} from 'api/fetch';
import { QUERY_KEY } from 'constants';

const PAGE_SIZE = 12;

export const productsQuery = options => ({
  queryKey: QUERY_KEY.PRODUCTS,
  queryFn: fetchProducts,
  retry: 0,
  staleTime: 3000,
  ...options,
});

export const pageProductsQuery = search => ({
  queryKey: [...QUERY_KEY.PAGE_PRODUCTS, search].filter(str => str),
  queryFn: ({ pageParam = 1 }) => fetchPageProducts(pageParam, PAGE_SIZE),
  getNextPageParam: (lastPage, allPages) => (lastPage.products.length === PAGE_SIZE ? allPages.length + 1 : undefined),
  retry: 0,
  staleTime: 3000,
});

export const filteredProductsQuery = (search, searchValue) => ({
  queryKey: [...QUERY_KEY.PAGE_PRODUCTS, searchValue],
  queryFn: fetchFilteredProducts(search),
  retry: 0,
  staleTime: 3000,
});

export const slidesQuery = options => ({
  queryKey: QUERY_KEY.SLIDES,
  queryFn: fetchSlides,
  retry: 0,
  staleTime: 3000,
  ...options,
});

export const verifyQuery = options => ({
  queryKey: QUERY_KEY.AUTH,
  queryFn: requestVerify,
  retry: 0,
  staleTime: 3000,
  ...options,
});

export const favoritesQuery = options => ({
  queryKey: QUERY_KEY.WISHLIST,
  queryFn: fetchFavorites,
  retry: 0,
  // staleTime: 3000,
  ...options,
});

export const cartsQuery = options => ({
  queryKey: QUERY_KEY.CARTS,
  queryFn: fetchCarts,
  retry: 0,
  // staleTime: 3000,
  ...options,
});

export const userQuery = options => ({
  queryKey: QUERY_KEY.ADDRESS,
  queryFn: fetchUser,
  retry: 0,
  staleTime: 3000,
  ...options,
});

export const couponsQuery = options => ({
  queryKey: QUERY_KEY.COUPONS,
  queryFn: fetchCoupons,
  retry: 0,
  staleTime: 3000,
  ...options,
});

export const historyQuery = ({ queryKey, ...options } = {}) => ({
  queryKey: [...QUERY_KEY.HISTORY, queryKey],
  queryFn: fetchHistory,
  retry: 0,
  staleTime: 3000,
  ...options,
});
