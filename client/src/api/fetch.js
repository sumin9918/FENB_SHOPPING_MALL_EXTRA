import axios from 'axios';

export const fetchProducts = async () => {
  const { data } = await axios.get('/api/products');
  return data;
};

export const fetchPageProducts = async (page, pageSize) => {
  const { data } = await axios.get(`/api/products/pages/${page}?pageSize=${pageSize}`);
  return data;
};

export const fetchFilteredProducts = search => async () => {
  const { data } = await axios.get(`/api/products${search}`);
  return data;
};

export const fetchSlides = async () => {
  const { data } = await axios.get('/api/slides');
  return data;
};

export const signOut = async () => {
  await axios.get('api/auth/signout');
};

export const requestVerify = async () => {
  const { data } = await axios.get('/api/auth/verify');
  return data;
};

export const fetchFavorites = async () => {
  const { data } = await axios.get('/api/favorites/me');
  return data;
};

export const fetchCarts = async () => {
  const { data } = await axios.get('/api/carts/me');
  return data;
};

export const fetchAddresses = async () => {
  const { data } = await axios.get('api/users/me/addresses');
  return data;
};

export const fetchCoupons = async () => {
  const { data } = await axios.get('/api/coupons');
  return data;
};

export const applyCoupon = async id => {
  const { data } = await axios.get(`/api/order/coupons/${id}`);
  return data;
};

export const fetchHistory = async () => {
  const { data } = await axios.get('/api/order/history');
  return data;
};

export const signIn = async ({ email, password }) => {
  const { data } = await axios.post('/api/auth/signin', {
    email,
    password,
  });

  return data;
};

export const checkEmailDuplicate = async email => {
  const { data } = await axios.post('/api/auth/signup/email', {
    email,
  });

  return data;
};

export const signUp = async ({ email, name, password, phone, mainAddress, detailAddress, postcode }) => {
  await axios.post('/api/auth/signup', {
    email,
    name,
    phone,
    password,
    mainAddress,
    detailAddress,
    postcode,
  });
};

export const addCoupon = async id => {
  const { data } = await axios.post(`/api/coupons/${id}`);
  return data;
};

export const toggleFavorite = async ({ id }) => {
  await axios.post('/api/favorites/me', { id });
};

export const addCart = async ({ id, selectedSize }) => {
  await axios.post(`/api/carts/me/${id}`, { selectedSize });
};

export const addAddress = async ({ name, phone, mainAddress, detailAddress, postcode }) => {
  const { data } = await axios.post('/api/users/me/address', {
    recipient: name,
    recipientPhone: phone,
    mainAddress,
    detailAddress,
    postcode,
  });
  return data;
};

export const order = async form => {
  await axios.post('/api/order/pay', form);
};

export const changeCartQuantity = async ({ id, selectedSize, quantity }) => {
  await axios.patch(`/api/carts/me/${id}`, { selectedSize, quantity });
};

export const changeDefaultAddress = async id => {
  await axios.patch(`/api/users/me/address/default/${id}`);
};

export const removeCart = async ({ id, selectedSize }) => {
  await axios.delete(`/api/carts/me/${id}?selectedSize=${selectedSize}`);
};

export const removeAddress = async id => {
  await axios.delete(`/api/users/me/address/${id}`);
};
