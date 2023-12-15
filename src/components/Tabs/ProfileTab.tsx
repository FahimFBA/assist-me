import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfileTab = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname;
  return (
    <>
      <Tabs value={currentPage} className="w-[400px]">
        <TabsList>
          <TabsTrigger
            onClick={() => navigate("/profile-page")}
            value="/profile-page"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            onClick={() => navigate("/details-page")}
            value="/details-page"
          >
            Details
          </TabsTrigger>
          {/* <TabsTrigger value="contact-info">Contact Info</TabsTrigger> */}
          <TabsTrigger value="grades">Grades</TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
};

export default ProfileTab;
