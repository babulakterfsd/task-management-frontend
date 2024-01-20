import TodoContainer from '../components/todo/TodoContainer';

const Todo = () => {
  return (
    <div>
      <h3 className="text-3xl text-center text-red-700">
        Let's create a todo app with redux
      </h3>
      <p className="text-center text-sm max-w-96 mx-auto mt-2">
        This is a simple todo app that helps to understand the basics of redux
        and how to setup the boilerplate for redux.
      </p>
      <TodoContainer />
    </div>
  );
};

export default Todo;
