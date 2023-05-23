import { Navigate, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';

import { verifyQuery } from '../api/query';
import { userState } from '../recoil/atoms';

const PrivateRoute = ({ redirectTo, element }) => {
  const { state } = useLocation();
  const { isFetched, error } = useQuery(verifyQuery());
  const setUser = useSetRecoilState(userState);

  if (isFetched && error) {
    setUser(null);
    return <Navigate state={state} to={redirectTo} />;
  }

  // token 검증 완료 이전에는 렌더링하지 않는다.
  return element;
};

export default PrivateRoute;
