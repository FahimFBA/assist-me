import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import { clearToken, logoutSuccess, useLogoutMutation } from "../../store";
import { RxHome, RxExit, RxEnvelopeClosed, RxClipboard } from "react-icons/rx";
import SidebarLink from "./SidebarLink";
// import DarkModeSwitch from "./DarkModeSwitch";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation(); // Get the current route
  console.log(location.pathname);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();

  const appSignout = async () => {
    dispatch(clearToken());
    dispatch(logoutSuccess());

    await toast
      .promise(logout(null).unwrap, {
        pending: "Logging out...",
        success: "Logout successful",
        error: "Logout failed",
      })
      .then(() => navigate("/login"));
  };

  return (
    <div className="flex">
      <aside className="sticky top-0 h-screen w-56 bg-gray-100 text-gray-800 p-4">
        <div className="flex items-center mb-4 space-x-1">
          <h1 className="text-lg font-medium">Assist Me</h1>
        </div>
        <nav className="space-y-2">
          <SidebarLink
            icon={<RxHome className="w-4 h-4" />}
            label="Dashboard"
            path="/profile-page"
          />
          <SidebarLink
            icon={<RxClipboard className="w-4 h-4" />}
            label="Tasks"
            path="/tasks"
          />
          <SidebarLink
            icon={<RxEnvelopeClosed className="w-4 h-4" />}
            label="Email"
            path="/email"
          />
          <div onClick={appSignout}>
            <SidebarLink
              icon={<RxExit className="w-4 h-4" />}
              label="Signout"
              path="/login"
            />
          </div>
          {/* Dark mode is a work in progress */}
          {/* <DarkModeSwitch /> */}
        </nav>
      </aside>
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
};

export default Sidebar;
