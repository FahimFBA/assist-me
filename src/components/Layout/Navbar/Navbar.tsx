import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LuSunMoon } from "react-icons/lu";

import { useSelector, useDispatch } from "react-redux";
import { RootState, themeSwitch } from "@/store";
import { useEffect } from "react";
import { ThemeTypesEnum } from "@/types/enums";

const Navbar = () => {
  const dispatch = useDispatch();
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
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between container mx-auto max-w-7xl">
      <Link
        className="text-xl font-bold flex items-center justify-center"
        to="/"
      >
        Assist Me
        <span className="sr-only">DocApp</span>
      </Link>
      <nav className="ml-auto flex gap-2 sm:gap-2 items-center">
        <Button variant="ghost" size="icon" onClick={handleChangeTheme}>
          <LuSunMoon className="w-5 h-5" />
        </Button>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="/signup"
        >
          <Button variant="outline" size="sm">
            Signup
          </Button>
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="/login"
        >
          <Button variant="default" size="sm">
            Login
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
