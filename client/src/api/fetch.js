import axios from 'axios';

export const fetchProducts = async () => {
  const { data } = await axios.get('/api/products');
  return data;
};

export const fetchFilteredProducts = search => async () => {
  const { data } = await axios.get(`/api/products${search}`);
  return data;
};

export const fetchPageProducts = async (page, pageSize) => {
  const { data } = await axios.get(`/api/products/pages/${page}?pageSize=${pageSize}`);
  return data;
};

export const fetchCarts = async () => {
  const { data } = await axios.get('/api/carts/me');
  return data;
};

export const fetchSlides = async () => {
  const { data } = await axios.get('/api/slides');
  return data;
};

export const fetchUser = async () => {
  const { data } = await axios.get('api/users/me');
  return data;
};

export const fetchCoupons = async () => {
  const { data } = await axios.get('/api/coupons');
  return data;
};

export const fetchHistory = async () => {
  const { data } = await axios.get('/api/order/history');
  return data;
};

export const requestVerify = async () => {
  const { data } = await axios.get('/api/auth/verify');
  return data;
};

export const requestSignout = async () => {
  await axios.get('api/auth/signout');
};

export const addCoupon = async id => {
  const { data } = await axios.post(`/api/coupons/${id}`);
  return data;
};

export const postOrder = async paymentInfo => {
  await axios.post('/api/order/pay', { ...paymentInfo });
};

export const checkCoupon = async id => {
  const { data } = await axios.get(`/api/order/coupons/${id}`);
  return data;
};
