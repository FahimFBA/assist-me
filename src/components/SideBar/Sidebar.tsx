import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import {
  RootState,
  clearToken,
  logoutSuccess,
  themeSwitch,
  useLogoutMutation,
} from "../../store";
import { useEffect } from "react";
import { ThemeTypesEnum } from "@/types/enums";
import SideBarMenu from "./SideBarMenu";
import MobileSideBar from "./MobileSideBar";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
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
      .then(() => navigate("/login"));
  };

  const theme = useSelector((state: RootState) => state.system.mode);

  useEffect(() => {
    document.documentElement.classList.toggle(
      ThemeTypesEnum.DARK,
      theme === ThemeTypesEnum.DARK,
    );
  }, [theme]);

  const handleChangeTheme = () =>
    dispatch(
      themeSwitch(
        theme === ThemeTypesEnum.LIGHT
          ? ThemeTypesEnum.DARK
          : ThemeTypesEnum.LIGHT,
      ),
    );

  return (
    <div className="flex">
      <aside className="hidden md:block sticky top-0 h-screen min-w-[220px] bg-background border-r-2 text-foreground p-4">
        <SideBarMenu
          theme={theme}
          appSignout={appSignout}
          handleChangeTheme={handleChangeTheme}
        />
      </aside>
      <main className="flex-grow p-6">{children}</main>
      <MobileSideBar
        menu={
          <SideBarMenu
            theme={theme}
            appSignout={appSignout}
            handleChangeTheme={handleChangeTheme}
          />
        }
      />
    </div>
  );
};

export default Sidebar;
