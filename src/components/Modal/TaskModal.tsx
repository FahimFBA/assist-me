import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FC } from "react";

interface TaskModalProps {
  buttonText: string;
  onConfirm: () => Promise<void>;
  children: React.ReactNode;
  dialogueTitle: string;
  dialogueDescription: string;
  confirmButtonText: string;
}

const TaskModal: FC<TaskModalProps> = ({
  onConfirm,
  children,
  buttonText,
  dialogueDescription,
  dialogueTitle,
  confirmButtonText,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogueTitle}</DialogTitle>
          <DialogDescription>{dialogueDescription}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">{children}</div>
        <DialogFooter>
          <Button onClick={onConfirm} type="submit" className="w-full">
            {confirmButtonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;
