import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  // const { user, token } = useAuth();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  if (!token) {
    console.log("token", token);
    // return <navigate to="/" />;
    alert(token);
  }
  return children;
};

export default ProtectedRoute;
