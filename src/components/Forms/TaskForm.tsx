import React from "react";
import InputField3 from "../Forms/InputField3";

const TaskForm = ({
  title,
  deadline,
  status,
  label,
  description,
  handleInput,
}: {
  title: string;
  deadline: string;
  status: string;
  label: string;
  description: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="grid gap-4 py-4">
      <InputField3
        label="Task Name"
        placeholder="scdjn"
        type="text"
        onChange={handleInput}
        name="title"
        value={title}
      />
      <InputField3
        label="deadline"
        placeholder="scdjn"
        type="text"
        onChange={handleInput}
        name="deadline"
        value={deadline}
      />
      <InputField3
        label="description"
        placeholder="description"
        type="text"
        onChange={handleInput}
        name="description"
        value={description}
      />
      <InputField3
        label="status"
        placeholder="status"
        type="text"
        onChange={handleInput}
        name="status"
        value={status}
      />

      <InputField3
        label="label"
        placeholder="label"
        type="text"
        onChange={handleInput}
        name="label"
        value={label}
      />
    </div>
  );
};

export default TaskForm;
