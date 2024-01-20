import { Link } from '@tanstack/react-router';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill all the fields');
    } else if (email !== 'babulakterfsd@gmail.com') {
      alert('Email is not correct');
    } else if (password !== '123456') {
      alert('Password is not correct');
    } else {
      alert('Login successfull');
    }
  };

  return (
    <div className="border border-slate-100 pt-4 px-6 pb-12 md:w-2/6 mx-auto">
      <h3 className="text-xl text-center font-semibold capitalize">
        Please login to continue !
      </h3>
      <div className="text-center flex flex-col my-3 text-sm">
        <span>babulakterfsd@gmail.com</span>
        <span>123456</span>
      </div>
      <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  focus:outline-none"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Sign in
        </button>
        <div className="flex items-center justify-end">
          <Link to="/">
            <span className="text-sm">Back to Home</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
