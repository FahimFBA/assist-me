import { Switch } from "@/components/ui/switch";
import { ThemeTypesEnum } from "@/types/enums";
import { RxMoon } from "react-icons/rx";

const DarkModeSwitch = ({
  onClick,
  theme,
}: {
  onClick: () => void;
  theme: ThemeTypesEnum.DARK | ThemeTypesEnum.LIGHT;
}) => {
  return (
    <button
      className={`w-full flex items-center justify-between py-2 px-2 rounded-lg text-gray-500`}
    >
      <div className="flex items-center space-x-2">
        <RxMoon className="w-4 h-4" />
        <span className="text-sm font-medium">Theme</span>
      </div>
      <Switch
        checked={theme === ThemeTypesEnum.DARK ? true : false}
        onCheckedChange={onClick}
      />
    </button>
  );
};

export default DarkModeSwitch;
