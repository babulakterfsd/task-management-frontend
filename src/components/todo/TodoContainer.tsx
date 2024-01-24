import {
  useGetTodosForASpecificUserFromServerQuery,
  useGetTodosFromServerQuery,
} from '@/redux/api/todoApi';
import { useCurrentUser } from '@/redux/features/authSlice';
import { useAppSelector } from '@/redux/hook';
import { TCurrentUser } from '@/types/commonTypes';
import AddTodo from './AddTodo';
import FilterTodosDropdown from './FilterTodosDropdown';
import NoTodo from './NoTodo';
import TodoList from './TodoList';

const TodoContainer = () => {
  const userInfo = useAppSelector(useCurrentUser);
  const { role, email } = userInfo as TCurrentUser;

  // load todos from local state
  // const { todos } = useAppSelector((state) => state.todo);

  //load todos from server
  let todos = [];

  if (role === 'admin') {
    const { data } = useGetTodosFromServerQuery(undefined);
    todos = data;
  } else if (role === 'user') {
    const { data } = useGetTodosForASpecificUserFromServerQuery(email);
    todos = data;
  }

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
