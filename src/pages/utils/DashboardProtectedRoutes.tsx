import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Sidebar from "../../components/SideBar/Sidebar";
import ProfileTab from "../../components/Tabs/ProfileTab";

const DashboardProtectedRoutes = () => {
  const userUid = useSelector((state: RootState) => state.user.uid);
  const emailVerified = useSelector(
    (state: RootState) => state.user.emailVerified,
  );

  if (userUid && emailVerified) {
    return (
      <Sidebar>
        <ProfileTab />
        <Outlet />
      </Sidebar>
    );
  }

  if (userUid && !emailVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return <Navigate to="/login" replace />;
};

export default DashboardProtectedRoutes;
