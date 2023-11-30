import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Sidebar from "../../components/SideBar/Sidebar";
import Tabs from "../../components/Tabs/Tabs";
import { useEffect } from "react";

const EmailProtectedRoutes = () => {
  const navigate = useNavigate();
  const userUid = useSelector((state: RootState) => state.user.uid);
  const emailVerified = useSelector(
    (state: RootState) => state.user.emailVerified,
  );
  const access_token: string = useSelector(
    (state: RootState) => state.tokenData.access_token,
  );

  useEffect(() => {
    if (!access_token) {
      navigate("/email");
    }
  }, [access_token]);

  if (userUid && emailVerified) {
    return (
      <Sidebar>
        <Tabs />
        <Outlet />
      </Sidebar>
    );
  }

  if (userUid && !emailVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return <Navigate to="/login" replace />;
};

export default EmailProtectedRoutes;
