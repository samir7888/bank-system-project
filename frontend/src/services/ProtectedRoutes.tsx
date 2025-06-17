import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoutes: string[];
}

export const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoutes,
}) => {
  const { user } = useAuth();
  const location = useLocation();
  console.log(user)
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!allowedRoutes.includes(String(user.role))) {
    
    const redirectPath = `/${String(user.role).toLowerCase()}-dashboard`;
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
