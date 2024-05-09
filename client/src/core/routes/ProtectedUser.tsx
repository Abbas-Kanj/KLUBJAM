import { Outlet, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";

interface DecodedToken {
  role: number;
  exp: any;
}

const ProtectedUser: React.FC = () => {
  const cookies = new Cookies();
  const authToken = cookies.get("auth_token");

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (authToken) {
      try {
        const decodedToken: DecodedToken = jwtDecode(authToken);
        const userRole = decodedToken.role;

        if (userRole === 3) {
          setIsAuthorized(true);
        } else {
          cookies.remove("auth_token");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, [authToken]);

  if (isLoading) {
    return <div>Authenticating...</div>;
  }

  return isAuthorized ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedUser;
