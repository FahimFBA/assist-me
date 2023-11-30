import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Sidebar from "../../components/SideBar/Sidebar";
import ProfileTab from "../../components/Tabs/ProfileTab";
import { useEffect } from "react";

const DashboardProtectedRoutes = () => {
  const navigate = useNavigate();
  const userUid = useSelector((state: RootState) => state.user.uid);
  const emailVerified = useSelector(
    (state: RootState) => state.user.emailVerified,
  );

  useEffect(() => {
    if (!emailVerified) {
      navigate("/verify-email");
    }
  }, [emailVerified]);

  if (userUid) {
    return (
      <Sidebar>
        <ProfileTab />
        <Outlet />
      </Sidebar>
    );
  }

  return <Navigate to="/login" replace />;
};

export default DashboardProtectedRoutes;
