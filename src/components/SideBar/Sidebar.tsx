// import { FaLock, Fa500Px, FaMailBulk, FaDashcube } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import { clearToken, logoutSuccess, useLogoutMutation } from "../../store";
import { RxHome, RxExit, RxEnvelopeClosed, RxClipboard } from "react-icons/rx";

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
          <button
            onClick={() => navigate("/profile-page")}
            className={`w-full flex items-center space-x-2 active:bg-gray-300 py-2 px-2 rounded-lg ${
              location.pathname === "/profile-page"
                ? "text-gray-800 bg-gray-200"
                : "text-gray-500"
            }`}
          >
            <RxHome className="w-4 h-4" />
            <span className="text-sm font-medium">Dashboard</span>
          </button>
          <button
            onClick={() => navigate("/tasks")}
            className={`w-full flex items-center space-x-2 active:bg-gray-300 py-2 px-2 rounded-lg ${
              location.pathname === "/tasks"
                ? "text-gray-800 bg-gray-200"
                : "text-gray-500"
            }`}
          >
            <RxClipboard className="w-4 h-4" />
            <span className="text-sm font-medium">Task</span>
          </button>
          <button
            onClick={() => navigate("/email")}
            className={`w-full flex items-center space-x-2 active:bg-gray-300 py-2 px-2 rounded-lg ${
              location.pathname === "/email"
                ? "text-gray-800 bg-gray-200"
                : "text-gray-500"
            }`}
          >
            <RxEnvelopeClosed className="w-4 h-4" />
            <span className="text-sm font-medium">Email</span>
          </button>
          <button
            onClick={appSignout}
            className={`w-full flex items-center space-x-2 active:bg-gray-300 py-2 px-2 rounded-lg ${
              location.pathname === "/"
                ? "text-gray-800 bg-gray-200"
                : "text-gray-500"
            }`}
          >
            <RxExit className="w-4 h-4" />
            <span className="text-sm font-medium">Signout</span>
          </button>
        </nav>
      </aside>
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
};

export default Sidebar;
