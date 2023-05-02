import axios from 'axios';

const url = `/api/carts/me`;

// carts 정보 가져오기
export const fetchCarts = async () => {
  const { data } = await axios.get(url);

  return data;
};

// cart 추가
// 수량(quantity)은 언제나 1개
export const addCart = async ({ id, selectedSize }) => axios.post(`${url}/${id}`, { selectedSize });

// cart 수량 변경
export const changeQuantity = async ({ id, selectedSize, quantity }) => {
  try {
    return axios.patch(`${url}/${id}`, { selectedSize, quantity });
  } catch (e) {
    return e.message;
  }
};

// cart 삭제
export const removeCart = async id => axios.delete(`${url}/${id}`);
