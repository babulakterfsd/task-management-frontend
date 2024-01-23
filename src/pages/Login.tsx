import { useLoginMutation } from '@/redux/api/authApi';
import { setUserInLocalState } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hook';
import { FieldValues, useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const handleLogin = async (loginData: FieldValues) => {
    if (!loginData?.email || !loginData?.password) {
      alert('Please fill all the fields');
    } else {
      const response = await login(loginData).unwrap();

      const userFromDB = response?.data?.user;
      const accessToken = response?.data?.token;

      if (userFromDB && accessToken) {
        alert('Login Successful');
        dispatch(setUserInLocalState({ user: userFromDB, token: accessToken }));
      } else {
        alert('Login Failed');
      }
    }
  };

  return (
    <div className="border border-slate-100 pt-4 px-6 pb-12 md:w-4/6 mx-auto">
      <h3 className="text-xl text-center font-semibold capitalize">
        Please login to continue !
      </h3>
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={handleSubmit(handleLogin)}
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  focus:outline-none"
            placeholder="name@company.com"
            {...register('email')}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  focus:outline-none"
            {...register('password')}
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Sign in
        </button>
        <div className="flex items-center justify-between">
          <p className="text-sm">Not Registered Yet?</p>
          <Link to="/signup">
            <span className="text-sm">Go to Signup</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
