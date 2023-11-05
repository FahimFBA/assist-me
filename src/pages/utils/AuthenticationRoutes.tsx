import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { Navbar, Footer } from "../../components/Layout";
import Headroom from "react-headroom";

const AuthenticationRoutes = () => {
  const userUid = useSelector((state: RootState) => state.user.uid);
  return userUid ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <>
      <Headroom>
        <Navbar />
      </Headroom>
      <Outlet />
      <Footer />
    </>
  );
};

export default AuthenticationRoutes;
