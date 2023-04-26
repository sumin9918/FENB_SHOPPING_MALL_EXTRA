import axios from 'axios';

const url = `/api/users/me/address`;

// user 정보 가져오기
// getUserInfo 사용 (index.js)

// address 추가
// id와 idDefault는 서버에서
export const addAddress = async newAddress => {
  const res = await axios.post(`${url}`, { ...newAddress });
  return res;
};

// address 기본 배송지 변경
export const changeDefaultAddress = async id => {
  await axios.patch(`${url}/default/${id}`);
};

// address 삭제
export const removeAddress = async id => {
  await axios.delete(`${url}/${id}`);
};
