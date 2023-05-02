import { useQuery } from '@tanstack/react-query';
import { Navigate, useLocation } from 'react-router-dom';
import { verifyQuery } from '../api/loader';

const PrivateRoute = ({ redirectTo, element }) => {
  const { state } = useLocation();
  const { isFetched, error } = useQuery(verifyQuery());

  // token 검증 완료 이전에는 렌더링하지 않는다.
  return isFetched && (error === null ? element : <Navigate to={redirectTo} state={state} />);
};

export default PrivateRoute;
