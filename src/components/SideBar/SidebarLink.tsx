import { useNavigate, useLocation } from "react-router-dom";

const SidebarLink = ({
  icon,
  label,
  path,
}: {
  icon: React.ReactNode;
  label: string;
  path: string;
}) => {
  const location = useLocation(); // Get the current route
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className={`w-full flex items-center space-x-2 hover:text-gray-800 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg ${
        location.pathname === path
          ? "text-gray-800 bg-gray-200"
          : "text-gray-500"
      }`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

export default SidebarLink;
