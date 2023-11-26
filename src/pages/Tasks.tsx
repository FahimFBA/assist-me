import {
  useGetAllTasksQuery,
  useDeleteOneTaskMutation,
  useCreateOneTaskMutation,
} from "../store/API/taskAPI";
import { toast } from "react-toastify";
import TaskModal from "../components/Modal/TaskModal";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { NewTaskType } from "../types/types";
import TaskForm from "../components/Forms/TaskForm";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import dayjs from "dayjs";
import { ITaskProps } from "@/types/interface";
import TaskDropdown from "@/components/Dropdown/TaskDropdown";
import { Button } from "@/components/ui/button";

const Tasks = () => {
  const userID = useSelector((state: RootState) => state.user.uid);
  const initialState: NewTaskType = {
    deadline: new Date(),
    description: "",
    label: "",
    status: "",
    title: "",
    userOwner: userID,
  };
  const [newTask, setNewTask] = React.useState<NewTaskType>(initialState);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });

  const onDateChange = (date: Date) =>
    setNewTask({ ...newTask, deadline: date });

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
    <div className="flex flex-col gap-5">
      {/* Modal */}
      <div className="flex justify-center">
        <TaskModal
          onConfirm={onSubmit}
          buttonText="Add Task"
          dialogueDescription="Make Tasks for a productive Day! Click save when you're done."
          dialogueTitle="Create New Task"
          confirmButtonText="Create"
        >
          <TaskForm
            {...newTask}
            handleInput={handleInput}
            onDateChange={onDateChange}
          />
        </TaskModal>
      </div>
      {/* Table */}
      <Table className="w-full rounded-md border">
        <TableHeader>
          <TableRow>
            <TableHead className="col-span-1">Task</TableHead>
            <TableHead className="col-span-1">Deadline</TableHead>
            <TableHead className="col-span-1">Status</TableHead>
            <TableHead className="col-span-9">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((task: ITaskProps) => {
            console.log(task);
            return (
              <TableRow key={task?.id}>
                <TableCell>{task?.title}</TableCell>
                <TableCell>
                  {task?.deadline
                    ? // @ts-ignore
                      dayjs(task?.deadline?.seconds).format(
                        "dddd, MMMM D, YYYY",
                      )
                    : "No Deadline"}
                </TableCell>
                <TableCell>{task?.status}</TableCell>
                <TableCell className="flex gap-2 items-center">
                  <Button variant="outline" size="sm" className="text-xs">
                    {task?.label ? task?.label : "No Label"}
                  </Button>
                  {task?.description}
                </TableCell>
                <TableCell>
                  <TaskDropdown deleteTask={() => deleteTask(task?.id)} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tasks;
