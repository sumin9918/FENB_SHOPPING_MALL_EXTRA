import axios from 'axios';

const url = `/api/users/me/address`;

// user 정보 가져오기
// getUserInfo 사용 (index.js)

// address 추가
// id와 idDefault는 서버에서
export const addAddress = async newAddress => axios.post(`${url}`, { ...newAddress });

// address 기본 배송지 변경
export const changeDefaultAddress = async id => axios.patch(`${url}/default/${id}`, { id });

// address 삭제
export const removeAddress = async id => axios.delete(`${url}/${id}`);
