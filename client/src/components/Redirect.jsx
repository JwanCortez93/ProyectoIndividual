import { Navigate } from "react-router-dom";

export const Redirect = () => {
  return <Navigate to="/error" replace />;
};
