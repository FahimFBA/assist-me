import { toast } from "react-toastify";
import { RootState, useLogoutMutation } from "../store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
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
    <div className="">
      <h3>Welcome {user?.name}</h3>
      <p>email: @ {user?.email}</p>
      <img
        className="mb-3"
        style={{
          width: "120px",
        }}
        src={
          user?.photoURL ? user?.photoURL : "/images/blank-profile-picture.svg"
        }
        alt=""
      />
      <p>
        This is the dashboard which is under development. Under this, you should
        be able to edit user data and delete your account permanently.
        <br />
        the password changing system is under development, which you can access
        here later
      </p>
      <br />
      <button onClick={appSignout}>click to logout</button>
    </div>
  );
};

export default Dashboard;
