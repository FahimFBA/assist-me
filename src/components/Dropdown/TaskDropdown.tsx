import { Trash, Pencil, MoreHorizontal } from "lucide-react";

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

const TaskDropdown: FC<{
  deleteTask: (id: string) => Promise<string>;
}> = ({ deleteTask }) => {
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
                  <div className="flex items-center px-2 py-2 cursor-default hover:bg-slate-100 rounded-md">
                    <Trash className="mr-2 h-4 w-4" />
                    <span className="text-[0.875rem]">Delete Task</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </div>
                }
                description="Are you sure you want to delete this task? This action cannot be undone."
                title="Delete Task?"
                onConfirm={deleteTask}
              />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" />
              <span>Edit Task</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default TaskDropdown;
