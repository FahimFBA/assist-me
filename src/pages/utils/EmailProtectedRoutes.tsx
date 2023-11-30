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

  useEffect(() => {
    if (!emailVerified) {
      navigate("/verify-email");
    }
  }, [emailVerified]);

  if (userUid) {
    return (
      <Sidebar>
        <Tabs />
        <Outlet />
      </Sidebar>
    );
  }
  return <Navigate to="/login" replace />;
};

export default EmailProtectedRoutes;
