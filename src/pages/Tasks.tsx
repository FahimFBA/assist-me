import {
  useGetAllTasksQuery,
  useDeleteOneTaskMutation,
  useCreateOneTaskMutation,
} from "../store/API/taskAPI";
import Task from "../components/Tasks/Task";
import { toast } from "react-toastify";
import TaskModal from "../components/Modal/TaskModal";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { NewTaskType } from "../types/types";
import TaskForm from "../components/Forms/TaskForm";

const Tasks = () => {
  const userID = useSelector((state: RootState) => state.user.uid);
  const initialState: NewTaskType = {
    deadline: "",
    description: "",
    label: "",
    status: "",
    title: "",
    userOwner: userID,
  };
  const [newTask, setNewTask] = React.useState<NewTaskType>(initialState);
  console.log(newTask);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });

  const { data, isError, isFetching, isLoading } = useGetAllTasksQuery({
    userID,
  });
  const [deleteOneTask] = useDeleteOneTaskMutation();
  const [createOneTask] = useCreateOneTaskMutation();

  const deleteTask = async (id: string) =>
    toast.promise(deleteOneTask({ id }).unwrap(), {
      pending: "Deleting task...",
      success: "Task deleted successfully",
      error: "Error deleting task",
    });

  const onSubmit = () =>
    toast
      .promise(createOneTask(newTask).unwrap(), {
        pending: "Creating task...",
        success: "Task created successfully",
        error: "Error creating task",
      })
      .then(() => setNewTask(initialState));

  if (isLoading || isFetching) {
    return <div className="">Loading please wait....</div>;
  }
  if (isError) {
    return <div className="">Error, please try again</div>;
  }
  return (
    <div className="row">
      <TaskModal
        onConfirm={onSubmit}
        buttonText="Add Task"
        dialogueDescription="Make Tasks for a productive Day! Click save when you're done."
        dialogueTitle="Create New Task"
        confirmButtonText="Create"
      >
        <TaskForm {...newTask} handleInput={handleInput} />
      </TaskModal>
      {data?.map((task) => {
        return <Task key={task.id} {...task} deleteTask={deleteTask} />;
      })}
    </div>
  );
};

export default Tasks;
