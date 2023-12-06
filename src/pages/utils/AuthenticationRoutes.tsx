import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { Footer, Navbar } from "../../components/Layout";

const AuthenticationRoutes = () => {
  const userUid = useSelector((state: RootState) => state.user.uid);
  return userUid ? (
    <Navigate to="/profile-page" replace />
  ) : (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AuthenticationRoutes;
