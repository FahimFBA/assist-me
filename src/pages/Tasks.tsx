import {
  useGetAllTasksQuery,
  useDeleteOneTaskMutation,
  useCreateOneTaskMutation,
} from "../store/API/taskAPI";
import Task from "../components/Tasks/Task";
import { toast } from "react-toastify";
import CreateModal from "../components/Modal/CreateModal";
import React from "react";
import { ITaskProps } from "../types/interface";

const Tasks = () => {
  const [newTask, setNewTask] = React.useState<
    Pick<ITaskProps, "deadline" | "description" | "label" | "status" | "title">
  >({
    deadline: "",
    description: "",
    label: "",
    status: "",
    title: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });

  const { data, isError, isFetching, isLoading } = useGetAllTasksQuery(null);
  const [deleteOneTask] = useDeleteOneTaskMutation();
  const [createOneTask] = useCreateOneTaskMutation();

  const deleteTask = async (id: string) => {
    toast.promise(deleteOneTask({ id }).unwrap(), {
      pending: "Deleting task...",
      success: "Task deleted successfully",
      error: "Error deleting task",
    });
  };

  const onSubmit = () => {
    toast.promise(createOneTask(newTask).unwrap(), {
      pending: "Creating task...",
      success: "Task created successfully",
      error: "Error creating task",
    });
  };

  if (isLoading || isFetching) {
    return <div className="">Loading please wait....</div>;
  }
  if (isError) {
    return <div className="">Error, please try again</div>;
  }
  return (
    <div className="row">
      <CreateModal
        button={<button className="btn btn-primary">Create Task</button>}
        title="Create Task"
        onCancel={() => console.log("cancel")}
        onClose={() => console.log("close")}
        onConfirm={onSubmit}
      >
        <form
          onSubmit={(e: React.ChangeEvent<HTMLFormElement>) =>
            e.preventDefault()
          }
        >
          <label htmlFor="" className="">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleInput}
            name="title"
            value={newTask?.title}
          />
          <label htmlFor="" className="">
            Deadline
          </label>
          <input
            type="date"
            className="form-control"
            onChange={handleInput}
            name="deadline"
            value={newTask?.deadline}
          />
          <label htmlFor="" className="">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleInput}
            name="description"
            value={newTask?.description}
          />
          <label htmlFor="" className="">
            Status
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleInput}
            name="status"
            value={newTask?.status}
          />
          <label htmlFor="" className="">
            Label
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleInput}
            name="label"
            value={newTask?.label}
          />
        </form>
      </CreateModal>
      {data?.map((task) => {
        return <Task key={task.id} {...task} deleteTask={deleteTask} />;
      })}
    </div>
  );
};

export default Tasks;
