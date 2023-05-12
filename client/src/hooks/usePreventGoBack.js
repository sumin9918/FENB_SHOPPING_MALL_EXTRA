import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const usePreventGoBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const preventGoBack = () => {
      navigate(location.href);
    };

    navigate(location.href);
    window.addEventListener('popstate', preventGoBack);

    return () => window.removeEventListener('popstate', preventGoBack);
  }, []);
};

export default usePreventGoBack;
