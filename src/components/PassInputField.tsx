import React from "react";

interface PassInputFieldProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: JSX.Element;
}

const PassInputField: React.FC<PassInputFieldProps> = ({
  placeholder,
  onChange,
  icon,
}) => {
  return (
    <div className="text-start">
      <div className="input-group with-icon">
        <span className="icon">
          <span className="icon">{icon}</span>
        </span>
        <input
          type="password"
          className="form-control rounded-2 py-4"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default PassInputField;
