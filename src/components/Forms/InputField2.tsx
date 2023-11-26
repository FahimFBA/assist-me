import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputField2 = ({
  label,
  name,
  placeholder,
  type,
  onChange,
  value,
  disabled,
}: {
  label: string;
  placeholder: string;
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
}) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};

export default InputField2;
