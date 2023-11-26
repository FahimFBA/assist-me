import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputField3 = ({
  name,
  onChange,
  value,
  placeholder,
  type,
  disabled,
  label,
}: {
  name: string;
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  disabled?: boolean;
}) => {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor={name} className="text-right">
        {label}
      </Label>
      <Input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="col-span-3"
        disabled={disabled}
      />
    </div>
  );
};

export default InputField3;
