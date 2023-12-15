import React from "react";
import InputField3 from "../Forms/InputField3";
import DatePicker from "./DatePicker";
import { Label } from "@radix-ui/react-label";

const TaskForm = ({
  title,
  deadline,
  status,
  label,
  description,
  handleInput,
  onDateChange,
}: {
  title: string;
  deadline: Date;
  status: string;
  label: string;
  description: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDateChange: (date: Date) => void;
}) => {
  return (
    <div className="grid gap-4 py-4">
      <InputField3
        label="Task Name"
        placeholder="Going to Gym"
        type="text"
        onChange={handleInput}
        name="title"
        value={title}
        required
      />
      <div className="grid grid-cols-4 items-center gap-4">
        <Label
          htmlFor="deadline"
          className="text-right font-semibold"
          style={{ fontSize: "0.875rem" }}
        >
          Deadline
        </Label>
        <DatePicker setvalue={onDateChange} value={deadline} />
      </div>

      <InputField3
        label="Description"
        placeholder="Details about your task"
        type="text"
        onChange={handleInput}
        name="description"
        value={description}
        required
      />
      <InputField3
        label="Status"
        placeholder="Current status of your task"
        type="text"
        onChange={handleInput}
        name="status"
        value={status}
        required
      />
      <InputField3
        label="Label"
        placeholder="Label for your task"
        type="text"
        onChange={handleInput}
        name="label"
        value={label}
        required
      />
    </div>
  );
};

export default TaskForm;
