import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Sidebar from "../../components/SideBar/Sidebar";
import ProfileTab from "../../components/Tabs/ProfileTab";

const DashboardProtectedRoutes = () => {
  const userUid = useSelector((state: RootState) => state.user.uid);

  return userUid ? (
    <>
      <Sidebar>
        <ProfileTab />
        <Outlet />
      </Sidebar>
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default DashboardProtectedRoutes;
