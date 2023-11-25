import "../../styles/tailwind.css";

import { Link, useLocation } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfileTab = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  const tabStyles = (tabName: string) => {
    const isActive = currentPage.includes(tabName);
    return `inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
      isActive ? "text-blue-600 border-blue-600" : ""
    }`;
  };

  return (
    <>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="contact-info">Contact Info</TabsTrigger>
          <TabsTrigger value="grades">Grades</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="details">Change your password here.</TabsContent>
      </Tabs>
      <div className="d-none mb-5 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <Link to="/profile-page" className={tabStyles("profile-page")}>
              Profile
            </Link>
          </li>
          <li className="me-2">
            <Link to="/details-page" className={tabStyles("details-page")}>
              Details
            </Link>
          </li>
          <li className="me-2">
            <Link to="/" className={tabStyles("Settings")}>
              Contact Info
            </Link>
          </li>
          <li className="me-2">
            <Link to="/" className={tabStyles("Settings")}>
              Grades
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileTab;
