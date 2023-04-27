import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';
import { verifyQuery } from '../api/loader';

const PrivateRoute = ({ redirectTo, element }) => {
  const { isFetched, error } = useQuery(verifyQuery());

  // token 검증 완료 이전에는 렌더링하지 않는다.
  return isFetched && (error === null ? element : <Navigate to={redirectTo} />);
};

export default PrivateRoute;
