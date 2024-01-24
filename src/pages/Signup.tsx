import { useCurrentToken } from '@/redux/features/authSlice';
import { useAppSelector } from '@/redux/hook';
import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const token = useAppSelector(useCurrentToken);

  useEffect(() => {
    if (token) {
      navigate('/dashboard');
    }
  }, [token, navigate]);

  const handleSignup = (signupData: FieldValues) => {
    const { userName, email, password } = signupData;
    if (!userName || !email || !password) {
      alert('Please fill all the fields');
    } else if (password.length < 6 || !/\d/.test(password)) {
      alert('Password must be at least 6 characters and must contain a number');
    } else {
      console.log(signupData);
    }
  };

  return (
    <div className="border border-slate-100 pt-4 px-6 pb-12 md:w-3/6 mx-auto">
      <h3 className="text-xl text-center font-semibold capitalize">
        Get Registered!
      </h3>
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={handleSubmit(handleSignup)}
      >
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="username"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  focus:outline-none"
            placeholder="name@company.com"
            {...register('userName')}
          />
        </div>
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
          <p className="text-sm">Already Registered?</p>
          <Link to="/login">
            <span className="text-sm">Go to Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
