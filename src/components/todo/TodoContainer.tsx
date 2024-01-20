import { useGetTodosFromServerQuery } from '@/redux/api/api';
import AddTodo from './AddTodo';
import FilterTodosDropdown from './FilterTodosDropdown';
import NoTodo from './NoTodo';
import TodoList from './TodoList';

const TodoContainer = () => {
  // load todos from local state
  // const { todos } = useAppSelector((state) => state.todo);

  //load todos from server
  const { data: todos } = useGetTodosFromServerQuery(undefined);

  return (
    <div className="md:w-4/6 md:mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <AddTodo />
        <FilterTodosDropdown />
      </div>
      <div className="border border-slate-300 shadow-sm p-3">
        {todos?.data?.length === 0 ? <NoTodo /> : <TodoList />}
      </div>
    </div>
  );
};

export default TodoContainer;
