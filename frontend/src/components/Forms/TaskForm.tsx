import React from "react";

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
    <form
      onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => e.preventDefault()}
    >
      <label htmlFor="" className="">
        Title
      </label>
      <input
        type="text"
        className="form-control"
        onChange={handleInput}
        name="title"
        value={title}
      />
      <label htmlFor="" className="">
        Deadline
      </label>
      <input
        type="date"
        className="form-control"
        onChange={handleInput}
        name="deadline"
        value={deadline}
      />
      <label htmlFor="" className="">
        Description
      </label>
      <input
        type="text"
        className="form-control"
        onChange={handleInput}
        name="description"
        value={description}
      />
      <label htmlFor="" className="">
        Status
      </label>
      <input
        type="text"
        className="form-control"
        onChange={handleInput}
        name="status"
        value={status}
      />
      <label htmlFor="" className="">
        Label
      </label>
      <input
        type="text"
        className="form-control"
        onChange={handleInput}
        name="label"
        value={label}
      />
    </form>
  );
};

export default TaskForm;
