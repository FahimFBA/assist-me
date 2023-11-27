import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import TaskForm from "../Forms/TaskForm";
import { ITaskProps } from "@/types/interface";
import { useState } from "react";

const EditTaskSheet = ({
  icon,
  taskData,
  onEdit,
}: {
  icon: React.ReactNode;
  taskData: ITaskProps;
  onEdit: (data: ITaskProps) => Promise<void>;
}) => {
  const [localdata, setLocalData] = useState(taskData);
  console.log(localdata);

  const onDateChange = (date: Date) => {
    const parsedDate = new Date(date);
    // Convert the parsed date to the format expected by your database
    const databaseFormat = {
      nanoseconds: parsedDate.getMilliseconds() * 1e6, // Convert milliseconds to nanoseconds
      seconds: Math.floor(parsedDate.getTime() / 1000), // Convert milliseconds to seconds
    };

    setLocalData({ ...localdata, deadline: databaseFormat as unknown as Date });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLocalData({
      ...localdata,
      [e.target.name]: e.target.value,
    });

  return (
    <Sheet>
      <SheetTrigger asChild>{icon}</SheetTrigger>
      <SheetContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <TaskForm
              {...localdata}
              // deadline = {seconds: 1629783600, nanoseconds: 0238237812}
              // @ts-ignore
              deadline={localdata.deadline?.seconds * 1000}
              handleInput={handleInput}
              onDateChange={onDateChange}
            />
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button onClick={() => onEdit(localdata)} type="submit">
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default EditTaskSheet;
