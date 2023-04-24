import axios from 'axios';

export const fetchProducts = async () => {
  const { data } = await axios.get('/api/products');
  return data;
};

export const fetchCarousel = async () => {
  const { data } = await axios.get('/api/carousel');
  return data;
};

export const checkSignIn = async () => {
  const { data } = await axios.get('/api/auth/verify');
  return data;
};

export const getUserInfo = async () => {
  const { data } = await axios.get('api/users/me');
  return data;
};

export const signOut = async () => {
  await axios.get('api/auth/signout');
};
