import { atom } from 'recoil';

const KEY = 'user';
// const userState = atom({
//   key: 'userState',
//   default: {},
// });

/**
 * Atom Effects
 * @see https://recoiljs.org/ko/docs/guides/atom-effects/
 */
const localStorageEffect = ({ onSet }) => {
  /**
   * onSet은 상태가 변경되면 호출된다.
   * 상태가 업데이트될 때마다 localStorage에 저장한다.
   */
  onSet(newState => {
    localStorage.setItem(KEY, JSON.stringify(newState));
  });
};

const userState = atom({
  key: 'userState',
  default: JSON.parse(localStorage.getItem(KEY)),
  effects: [localStorageEffect],
});

export default userState;
