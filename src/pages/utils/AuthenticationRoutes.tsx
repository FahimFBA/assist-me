import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { Navbar, Footer } from "../../components/Layout";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
// import "../../styles/plugin.css";
// import "../../styles/style.css";

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
