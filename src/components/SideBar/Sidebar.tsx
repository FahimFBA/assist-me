// import { FaLock, Fa500Px, FaMailBulk, FaDashcube } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import { clearToken, logoutSuccess, useLogoutMutation } from "../../store";

export default function Sidebar({ children }: { children: React.ReactNode }) {
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
            <IconHome className="w-4 h-4" />
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
            <IconTax className="w-4 h-4" />
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
            <IconTransactions className="w-4 h-4" />
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
            <IconAccounts className="w-4 h-4" />
            {/* <FaLock /> */}
            <span className="text-sm font-medium">Signout</span>
          </button>
        </nav>
      </aside>
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
}

function IconAccounts(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconHome(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconTax(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}

function IconTransactions(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}
