import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const AuthenticationRoutes = () => {
  const userUid = useSelector((state: RootState) => state.user.uid);
  console.log("AuthenticationRoutes");
  return userUid ? <Navigate to="/profile-page" replace /> : <Outlet />;
};

export default AuthenticationRoutes;
