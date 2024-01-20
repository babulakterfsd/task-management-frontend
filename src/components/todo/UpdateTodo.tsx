import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useUpdateATodoInServerMutation } from '@/redux/api/api';
import { TTodo } from '@/types/commonTypes';
import { useState } from 'react';

const UpdateTodo = (todo: { todo: TTodo }) => {
  const [title, setTitle] = useState<string>(todo.todo.title);
  const [description, setDescription] = useState<string>(todo.todo.description);
  const [isCompleted, setIsCompleted] = useState<boolean>(
    todo.todo.isCompleted
  );

  const [updateTodoInServer] = useUpdateATodoInServerMutation();

  const handleIsCompletedChange = () => {
    setIsCompleted(!isCompleted);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const options = {
      id: todo.todo.id,
      title,
      description,
      isCompleted,
    };

    updateTodoInServer(options);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-green-400 font-semibold">update</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update</DialogTitle>
          <DialogDescription>
            Update todo title and description and hit save.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                name="reason"
                id="reason"
                className="text-sm rounded-lg block w-full p-2.5 bg-slate-300 text-black focus:outline-none"
                placeholder="Todo Title"
                required
                minLength={3}
                maxLength={8}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="note"
                rows={3}
                className="block p-2.5 w-full text-sm rounded-lg   focus:outline-none bg-slate-300 text-black"
                placeholder="Write todo description here.."
                minLength={9}
                maxLength={20}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="isCompleted"
                id="isCompleted"
                className="peer h-4 w-4 border-gray-300 rounded-md text-dashboard-main focus:ring-indigo-500"
                checked={isCompleted}
                onChange={handleIsCompletedChange}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {isCompleted ? (
                  <span className="text-xs text-green-400">Completed</span>
                ) : (
                  <span className="text-xs text-red-700">Incompleted</span>
                )}
              </label>
            </div>
            <DialogClose asChild>
              <button
                type="submit"
                className="mt-4 bg-red-300 rounded-md px-8 py-2 text-white hover:bg-red-400 transition-colors duration-300 ease-in-out"
              >
                Save
              </button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTodo;
