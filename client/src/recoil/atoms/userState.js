import { atom } from 'recoil';

const USER_KEY = 'userState';

const localStorageEffect = ({ onSet }) => {
  onSet(newState => {
    localStorage.setItem(USER_KEY, JSON.stringify(newState));
  });
};

const userState = atom({
  key: USER_KEY,
  default: JSON.parse(localStorage.getItem(USER_KEY)),
  effects: [localStorageEffect],
});

export default userState;
