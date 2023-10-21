import { toast } from "react-toastify";
import { useLogoutMutation } from "../store";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  const appSignout = async () =>
    await toast
      .promise(logout(null).unwrap, {
        pending: "Logging out...",
        success: "Logout successful",
        error: "Logout failed",
      })
      // .then(() => setIsMenuOpen(false))
      .then(() => navigate("/login"));

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      This is the dashboard which is under development
      <br />
      <br />
      <button onClick={appSignout}>click to logout</button>
      <br />
    </div>
  );
};

export default Dashboard;
