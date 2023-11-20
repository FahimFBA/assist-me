import "../../styles/dashboardStyles/bootstrap-dark.css";
import "../../styles/dashboardStyles/icons.min.css";
import "../../styles/dashboardStyles/app-dark.css";
import SidebarLink from "./SidebarLink";
import { FaLock, Fa500Px, FaMailBulk, FaDashcube } from "react-icons/fa";
import { toast } from "react-toastify";
import { useLogoutMutation } from "../../store";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const appSignout = async () =>
    await toast
      .promise(logout(null).unwrap, {
        pending: "Logging out...",
        success: "Logout successful",
        error: "Logout failed",
      })
      .then(() => navigate("/login"));
  return (
    <>
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          {/* <!--- Sidemenu --> */}
          <div id="sidebar-menu">
            {/* <!-- Left Menu Start --> */}
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title">Menu</li>

              <SidebarLink
                link="/dashboard"
                icon={<FaDashcube />}
                label="Dashboard"
              />
              <SidebarLink link="/tasks" icon={<Fa500Px />} label="Task" />
              <SidebarLink link="/email" icon={<FaMailBulk />} label="Email" />
              <SidebarLink
                link="/login"
                icon={<FaLock />}
                label="Logout"
                onClick={appSignout}
              />
            </ul>
          </div>
          {/* <!-- Sidebar --> */}
        </div>
      </div>
      <div className="container my-4">{children}</div>
    </>
  );
};

export default Sidebar;
