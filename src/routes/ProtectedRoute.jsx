import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  if (loading === false) {
    if (!isAuthenticated) {
      console.log("Inside the !isAuthenticated and loading is flase");
      return <Navigate to="/login" replace />;
    }
    console.log("rendering the childeren");
    return children;
  }
};

export default ProtectedRoute;
