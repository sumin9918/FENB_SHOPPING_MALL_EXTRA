import {
  requestVerify,
  fetchSlides,
  fetchCoupons,
  fetchFilteredProducts,
  fetchHistory,
  fetchPageProducts,
  fetchProducts,
  fetchFavorites,
  fetchCarts,
  fetchAddresses,
} from 'api/fetch';
import { QUERY_KEY } from 'constants';

const defaultOptions = {
  retry: 0,
  staleTime: 3000,
};

const PAGE_SIZE = 12;

export const productsQuery = options => ({
  queryKey: QUERY_KEY.PRODUCTS,
  queryFn: fetchProducts,
  ...defaultOptions,
  ...options,
});

export const pageProductsQuery = search => ({
  queryKey: [...QUERY_KEY.PAGE_PRODUCTS, search].filter(str => str),
  queryFn: ({ pageParam = 1 }) => fetchPageProducts(pageParam, PAGE_SIZE),
  getNextPageParam: (lastPage, allPages) => (lastPage.products.length === PAGE_SIZE ? allPages.length + 1 : undefined),
  ...defaultOptions,
});

export const filteredProductsQuery = (search, searchValue) => ({
  queryKey: [...QUERY_KEY.PAGE_PRODUCTS, searchValue],
  queryFn: fetchFilteredProducts(search),
  ...defaultOptions,
});

export const slidesQuery = options => ({
  queryKey: QUERY_KEY.SLIDES,
  queryFn: fetchSlides,
  ...defaultOptions,
  ...options,
});

export const verifyQuery = options => ({
  queryKey: QUERY_KEY.AUTH,
  queryFn: requestVerify,
  ...defaultOptions,
  ...options,
});

export const favoritesQuery = options => ({
  queryKey: QUERY_KEY.WISHLIST,
  queryFn: fetchFavorites,
  ...defaultOptions,
  ...options,
});

export const cartsQuery = options => ({
  queryKey: QUERY_KEY.CARTS,
  queryFn: fetchCarts,
  ...defaultOptions,
  ...options,
});

export const addressesQuery = options => ({
  queryKey: QUERY_KEY.ADDRESSES,
  queryFn: fetchAddresses,
  ...defaultOptions,
  ...options,
});

export const couponsQuery = options => ({
  queryKey: QUERY_KEY.COUPONS,
  queryFn: fetchCoupons,
  ...defaultOptions,
  ...options,
});

export const historyQuery = (options = {}) => ({
  queryKey: QUERY_KEY.HISTORY,
  queryFn: fetchHistory,
  ...defaultOptions,
  ...options,
});
