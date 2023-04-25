import axios from 'axios';

const url = '/api/favorites/me';

const fetchFavorites = async () => {
  const { data } = await axios.get(url);
  return data;
};

const toggleFavorite = async id => axios.post(url, { id });

export { fetchFavorites, toggleFavorite };
