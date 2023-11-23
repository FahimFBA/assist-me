import React from "react";

interface InputFieldProps {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: JSX.Element;
  className?: string;
}
const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  icon,
  className,
}) => {
  return (
    <div className={`text-start ${className || ""}`}>
      <div className="input-group with-icon">
        <span className="icon">{icon}</span>
        <input
          type={type}
          className={`form-control rounded-2 py-4 ${className || ""}`}
          placeholder={placeholder}
          required
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default InputField;
