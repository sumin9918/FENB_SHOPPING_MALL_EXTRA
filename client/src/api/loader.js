import { queryClient } from 'components/GlobalProvider';
import {
  cartsQuery,
  couponsQuery,
  favoritesQuery,
  filteredProductsQuery,
  historyQuery,
  pageProductsQuery,
  productsQuery,
  slidesQuery,
  userQuery,
  verifyQuery,
} from 'api/query';
import { getDecodeSearch } from 'utils';

export const productsLoader = async () => {
  const { queryKey, queryFn } = productsQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

export const pageProductsLoader = async search => {
  const { queryKey, queryFn } = pageProductsQuery(search);

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchInfiniteQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

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

export const slidesLoader = async () => {
  const { queryKey, queryFn } = slidesQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

export const verifyLoader = async () => {
  const { queryKey, queryFn } = verifyQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

export const favoritesLoader = async () => {
  const { queryKey, queryFn } = favoritesQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

export const cartsLoader = async () => {
  const { queryKey, queryFn } = cartsQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

export const userLoader = async () => {
  const { queryKey, queryFn } = userQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

export const couponsLoader = async () => {
  const { queryKey, queryFn } = couponsQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};

export const historyLoader = async () => {
  const { queryKey, queryFn } = historyQuery();

  try {
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery({ queryKey, queryFn }));
  } catch (e) {
    throw new Error(e);
  }
};
