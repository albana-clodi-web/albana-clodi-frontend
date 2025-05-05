import { ReactNode } from "react";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  children: ReactNode;
}
function ProtectedRoute({ children }: ProtectedRouteProps) {
  const authUser = localStorage.getItem("authUser");
  localStorage.setItem("authUser", "token");
  if (!authUser) {
    return <Navigate to={"/signin"} replace />;
  }
  return children;
}

export default ProtectedRoute;
