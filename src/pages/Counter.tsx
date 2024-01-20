import { decrement, increment } from '../redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '../redux/hook';

const Counter = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  return (
    <>
      <h1 className="text-red-700 text-3xl text-center">
        This is counter app with redux
      </h1>
      <p className="text-center text-sm max-w-96 mx-auto mt-2">
        counter app with redux and typescript and tailwindcss.
      </p>
      <div className="border border-slate-100 p-10 md:w-3/6 mx-auto mt-4 rounded flex justify-center items-center md:space-x-6">
        <button
          type="button"
          className="text-white bg-lime-700 py-2 px-4 rounded-sm"
          onClick={() => dispatch(increment(1))}
        >
          Increment by 1
        </button>
        <p className="text-3xl font-bold w-16 text-center">{count}</p>
        <button
          type="button"
          className="text-white bg-amber-700 py-2 px-4 rounded-sm"
          onClick={() => dispatch(decrement(1))}
        >
          Decrement by 1
        </button>
      </div>
    </>
  );
};

export default Counter;
