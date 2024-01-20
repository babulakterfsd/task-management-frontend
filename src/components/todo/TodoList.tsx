import {
  useDeleteATodoFromServerMutation,
  useGetTodosFromServerQuery,
} from '@/redux/api/api';
import { useAppSelector } from '@/redux/hook';
import { TTodo } from '@/types/commonTypes';
import UpdateTodo from './UpdateTodo';

const TodoList = () => {
  // // load states from local
  const { filter } = useAppSelector((state) => state.todo);

  //load state from server
  const {
    data: todos,
    isLoading,
    isError,
  } = useGetTodosFromServerQuery(undefined);
  const [deleteATodoFromServer] = useDeleteATodoFromServerMutation();

  let allTodos: TTodo[] = [];

  if (isLoading === false && isError === false) {
    const completedTodos = todos.data.filter((todo: TTodo) => todo.isCompleted);
    const incompleteTodos = todos.data.filter(
      (todo: TTodo) => !todo.isCompleted
    );
    allTodos = incompleteTodos.concat(completedTodos); // just to show incompleted todos first
  }

  const handleDelete = (todo: TTodo) => {
    deleteATodoFromServer(todo);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-center text-gray-400">
        <thead className="text-xs text-black uppercase bg-slate-100">
          <tr>
            <th scope="col" className="px-4 py-3">
              Title
            </th>
            <th scope="col" className="px-4 py-3">
              Description
            </th>
            <th scope="col" className="px-4 py-3">
              Iscompleted
            </th>
            <th scope="col" className="px-4 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filter === 'all' &&
            allTodos?.map((todo: TTodo) => {
              const { id, title, description, isCompleted } = todo;

              return (
                <tr className="border-b border-gray-700" key={id}>
                  <th
                    scope="row"
                    className="px-2 lg:px-4 py-1 lg:py-1.5 font-[400] text-dashboard-main whitespace-nowrap"
                  >
                    {title}
                  </th>
                  <td>{description}</td>
                  <td className="px-2 lg:px-4 py-1 lg:py-1.5">
                    {isCompleted ? (
                      <span className="text-green-500 text-xs">Completed</span>
                    ) : (
                      <span className="text-red-500 text-xs">
                        Not Completed
                      </span>
                    )}
                  </td>
                  <td className="flex justify-center space-x-3 items-center">
                    <UpdateTodo todo={todo} />
                    <button
                      className="text-red-700 font-semibold"
                      onClick={() => handleDelete(todo)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {filter === 'completed' &&
            todos.data
              ?.filter((todo: TTodo) => todo.isCompleted)
              .map((todo: TTodo) => {
                const { id, title, description, isCompleted } = todo;

                return (
                  <tr className="border-b border-gray-700" key={id}>
                    <th
                      scope="row"
                      className="px-2 lg:px-4 py-1 lg:py-1.5 font-[400] text-dashboard-main whitespace-nowrap"
                    >
                      {title}
                    </th>
                    <td>{description}</td>
                    <td className="px-2 lg:px-4 py-1 lg:py-1.5">
                      {isCompleted ? (
                        <span className="text-green-500 text-xs">
                          Completed
                        </span>
                      ) : (
                        <span className="text-red-500 text-xs">
                          Not Completed
                        </span>
                      )}
                    </td>
                    <td className="flex justify-center space-x-3 items-center">
                      <UpdateTodo todo={todo} />
                      <button
                        className="text-red-700 font-semibold"
                        onClick={() => handleDelete(todo)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          {filter === 'incompleted' &&
            todos?.data
              ?.filter((todo: TTodo) => !todo.isCompleted)
              .map((todo: TTodo) => {
                const { id, title, description, isCompleted } = todo;

                return (
                  <tr className="border-b border-gray-700" key={id}>
                    <th
                      scope="row"
                      className="px-2 lg:px-4 py-1 lg:py-1.5 font-[400] text-dashboard-main whitespace-nowrap"
                    >
                      {title}
                    </th>
                    <td>{description}</td>
                    <td className="px-2 lg:px-4 py-1 lg:py-1.5">
                      {isCompleted ? (
                        <span className="text-green-500 text-xs">
                          Completed
                        </span>
                      ) : (
                        <span className="text-red-500 text-xs">
                          Not Completed
                        </span>
                      )}
                    </td>
                    <td className="flex justify-center space-x-3 items-center">
                      <UpdateTodo todo={todo} />
                      <button
                        className="text-red-700 font-semibold"
                        onClick={() => handleDelete(todo)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
