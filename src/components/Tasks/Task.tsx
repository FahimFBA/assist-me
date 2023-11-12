import { FC, useState } from "react";
import { ITaskProps } from "../../types/interface";
import { StatusEnum } from "../../types/enums";
import { BsPencil, BsTrash, BsClock } from "react-icons/bs";
import DeleteModal from "../Modal/DeleteModal";
import dayjs from "dayjs";
import TaskModal from "../Modal/TaskModal";
import TaskForm from "../Forms/TaskForm";
import { toast } from "react-toastify";
import { useEditOneTaskMutation } from "../../store/API/taskAPI";

interface ITaskComponentProps extends ITaskProps {
  deleteTask: (id: string) => void;
}

const Task: FC<ITaskComponentProps> = ({
  deadline,
  description,
  id,
  label,
  status,
  title,
  deleteTask,
}) => {
  const [data, setData] = useState({
    id,
    title,
    deadline,
    status,
    label,
    description,
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  const [editOneTask] = useEditOneTaskMutation();
  const onSubmit = async () => {
    await toast.promise(editOneTask(data).unwrap(), {
      pending: "Updating task...",
      success: "Task updated successfully",
      error: "Error updating task",
    });
  };

  return (
    <div className="card col-4">
      <div className="card-body">
        <div className="card-title d-flex gap-2 align-center">
          <h5 className="">{title}</h5>
          <span
            style={{
              fontSize: "15px",
            }}
            className="badge rounded-pill text-bg-primary px-2"
          >
            {label}
          </span>
        </div>
        <div className="d-flex align-center gap-3 mb-3 font-weight-light">
          <BsClock />
          {deadline
            ? dayjs(deadline).format("dddd, MMMM D, YYYY")
            : "No Deadline"}
        </div>
        <p className="card-text">{description}</p>
        <div className="d-flex gap-2">
          {status == StatusEnum.INCOMPLETE && (
            <span className="badge rounded-pill text-bg-warning px-4">
              {status}
            </span>
          )}
          {status == StatusEnum.CANCELLED && (
            <span className="badge rounded-pill text-bg-danger px-4">
              {status}
            </span>
          )}
          <TaskModal
            button={
              <span className="px-5 rounded-pill text-bg-success py-1">
                <BsPencil />
              </span>
            }
            title="Edit Task Task"
            onCancel={() => console.log("cancel")}
            onClose={() => console.log("close")}
            onConfirm={onSubmit}
          >
            <TaskForm {...data} handleInput={handleInput} />
          </TaskModal>
          <DeleteModal
            button={
              <span className="px-5 rounded-pill text-bg-danger py-1">
                <BsTrash />
              </span>
            }
            title="Delete Task"
            description="Are you sure you want to delete this task?"
            onCancel={() => console.log("cancel")}
            onConfirm={() => deleteTask(id)}
            onClose={() => console.log("close")}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
