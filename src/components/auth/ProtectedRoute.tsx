import { ReactNode } from "react";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  children: ReactNode;
}
function ProtectedRoute({ children }: ProtectedRouteProps) {
  const authUser = localStorage.getItem("token");

  if (!authUser) {
    return <Navigate to={"/signin"} replace />;
  } else {
    localStorage.setItem("token", authUser);
    return children;
  }
}

export default ProtectedRoute;
