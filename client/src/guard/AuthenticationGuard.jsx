import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';

/**
 * Protected Route
 */
// const AuthenticationGuard = ({ redirectTo, element }) => {
//   const [isAuthenticated, setIsAuthenticated] = React.useState(false);
//   const [completed, setCompleted] = React.useState(false); // token 검증 완료 여부

//   console.log(isAuthenticated, completed);
//   React.useEffect(() => {
//     (async () => {
//       try {
//         await axios('/api/auth/verify');
//         setIsAuthenticated(true);
//       } catch (e) {
//         setIsAuthenticated(false);
//       } finally {
//         setCompleted(true);
//       }
//     })();
//   }, [redirectTo]);

//   // token 검증 완료 이전에는 렌더링하지 않는다.
//   return completed ? isAuthenticated ? element : <Navigate to={redirectTo} /> : null;
// };

/**
 * Protected Route
 */
const AuthenticationGuard = ({ redirectTo, element }) => {
  const { isFetched, error } = useQuery({
    queryKey: ['isAuthenticated'],
    queryFn: () => axios('/api/auth/verify'),
    retry: false,
    staleTime: 1000,
  });

  console.log(isFetched, error);

  // token 검증 완료 이전에는 렌더링하지 않는다.
  return isFetched ? error === null ? element : <Navigate to={redirectTo} /> : null;
};

export default AuthenticationGuard;
