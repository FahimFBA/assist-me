import { toast } from "react-toastify";
import {
  RootState,
  clearToken,
  logoutSuccess,
  useLogoutMutation,
} from "../../store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const [logout] = useLogoutMutation();

  const appSignout = async () => {
    dispatch(clearToken());
    dispatch(logoutSuccess());
    await toast
      .promise(logout(null).unwrap(), {
        pending: "Logging out...",
        success: "Logout successful",
        error: "Logout failed",
      })
      // .then(() => setIsMenuOpen(false))
      .then(() => navigate("/login"));
  };

  return (
    <div className="">
      <h3>Welcome {user?.name}</h3>
      <p>email: @ {user?.email}</p>
      <img
        className="mb-3"
        style={{
          width: "120px",
          height: "120px",
        }}
        src={
          user?.photoURL ? user?.photoURL : "/images/blank-profile-picture.svg"
        }
        alt=""
      />
      <p>
        This is the ProfilePage which is under development. Under this, you
        should be able to edit user data and delete your account permanently.
        <br />
        the password changing system is under development, which you can access
        here later
      </p>
      <br />
      <Button variant="default" onClick={appSignout}>
        Logout
      </Button>
    </div>
  );
};

export default ProfilePage;
