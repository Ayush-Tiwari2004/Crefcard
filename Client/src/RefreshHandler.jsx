import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function RefreshHandler({ setIsAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);

      // Redirect to profile page if authenticated and trying to access restricted pages
      if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register') {
        navigate('/profile', { replace: true });
      }
    } else {
      setIsAuthenticated(false);
      // If not authenticated, restrict access to profile page and redirect to home page
      if (location.pathname.startsWith('/profile')) {
        navigate('/', { replace: true });
      }
    }
  }, [location, navigate, setIsAuthenticated]);

  return null;
}

