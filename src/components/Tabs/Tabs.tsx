import "../../styles/tailwind.css";

import { Link, useLocation } from "react-router-dom";

const Tabs = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  const tabStyles = (tabName: string) => {
    const isActive = currentPage.includes(tabName);
    return `inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${isActive ? "text-blue-600 border-blue-600" : ""
      }`;
  };

  return (
    <div className="mb-5 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
          <Link to="/email-inbox" className={tabStyles("email-inbox")}>
            Inbox
          </Link>
        </li>
        {/* <li className="me-2">
          <Link to="/email-templates" className={tabStyles("email-templates")}>
            Templates
          </Link>
        </li> */}
        <li className="me-2">
          <Link to="/" className={tabStyles("Settings")}>
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
