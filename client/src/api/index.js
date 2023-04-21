import axios from 'axios';

export const fetchProducts = async () => {
  const { data } = await axios.get('/api/products');
  return data;
};

export const fetchCarousel = async () => {
  const { data } = await axios.get('/api/carousel');
  return data;
};
