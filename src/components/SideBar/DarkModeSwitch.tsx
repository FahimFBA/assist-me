import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const DarkModeSwitch = () => {
  return (
    <div className="ms-2 flex justify-between align-center space-x-2 cursor-pointer">
      <Label htmlFor="airplane-mode" className="text-gray-500">
        Theme
      </Label>
      <Switch
        style={{
          backgroundColor: "lightgray", // Set a background color
          border: "2px solid red",
        }}
        id="airplane-mode"
      />
    </div>
  );
};

export default DarkModeSwitch;
