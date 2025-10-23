import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  token: string | null;
  children: ReactNode;
}

const PrivateRoute = ({ token, children }: PrivateRouteProps) => {
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
