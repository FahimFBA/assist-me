import { Switch } from "@/components/ui/switch";
import { RxMoon } from "react-icons/rx";

const DarkModeSwitch = () => {
  return (
    <button
      // onClick={() => navigate(path)}
      className={`w-full flex items-center justify-between py-2 px-2 rounded-lg text-gray-500`}
    >
      <div className="flex items-center space-x-2">
        {/* {icon} */}
        <RxMoon className="w-4 h-4" />
        <span className="text-sm font-medium">sdljck</span>
      </div>
      <Switch
        // checked={true}
        onCheckedChange={() => console.log("Theme change")}
      />
    </button>
  );
};

export default DarkModeSwitch;
