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
import TaskForm from "../Form/TaskForm";
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

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalData({
      ...localdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date: Date) => {
    setLocalData({
      ...localdata,
      deadline: date, 
    });
  };

  const handleStatusChange = (status: string) => {
    setLocalData({
      ...localdata,
      status: status,
    });
  };

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
            <SheetTitle>Edit task</SheetTitle>
            <SheetDescription>
              Make changes to your Task here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <TaskForm {...localdata} handleInput={handleInput} handleDateChange={handleDateChange} handleStatusChange={handleStatusChange} />
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
