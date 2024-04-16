import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
  
    const location = useLocation();
  
    if (loading) {
      return (
        <div className="flex justify-center items-center m-32 md:m-96">
          <span className="loading loading-bars loading-lg"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      );
    }
    if (user) {
      return children;
    } else {
      return <Navigate to="/" state={{ from: location }}></Navigate>;
    }
  };

export default AdminRoute;