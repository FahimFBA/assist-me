import {
  Trash,
  // Pencil,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteModal from "../Modal/DeleteModal";
import { FC } from "react";

const MailDropdown: FC<{
  deleteTask: (id: string) => Promise<null>;
  // taskData: ITaskProps;
  // onEdit: (data: ITaskProps) => Promise<void>;
}> = ({ deleteTask }) =>
  // { deleteTask, taskData, onEdit }
  {
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <DeleteModal
                  icon={
                    <div className="flex items-center px-2 py-2 cursor-default hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">
                      <Trash className="mr-2 h-4 w-4" />
                      <span className="text-[0.875rem]">Delete Email</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </div>
                  }
                  description="Are you sure you want to delete this Mail? This action cannot be undone."
                  title="Delete Mail?"
                  onConfirm={deleteTask}
                />
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                {/* <EditTaskSheet
                  icon={
                    <div className="flex items-center px-2 py-2 cursor-default hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">
                      <Pencil className="mr-2 h-4 w-4" />
                      <span>Edit Task</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </div>
                  }
                  taskData={taskData}
                  onEdit={onEdit}
                /> */}
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  };

export default MailDropdown;
