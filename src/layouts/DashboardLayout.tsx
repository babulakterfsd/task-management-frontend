import {
  setUserInLocalState,
  useCurrentUser,
} from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { TCurrentUser } from '@/types/commonTypes';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { toast } from 'sonner';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(useCurrentUser);
  const { username, role } = userInfo as TCurrentUser;

  const handleLogout = () => {
    toast.success('Logout Successful', {
      position: 'top-right',
    });
    dispatch(setUserInLocalState({ user: null, token: null }));
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? '' : '-translate-x-full sm:translate-x-0'
        }`}
        aria-label="Sidebar"
      >
        {' '}
        <div className="h-screen px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex justify-end items-center mb-5 sm:hidden">
            <button
              className="text-3xl text-red-400"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              x
            </button>
          </div>
          <ul className="font-medium">
            <li className="border-b-2 border-slate-100 mb-4 lg:hidden">{`Welcome, ${username}(${role})`}</li>
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span
                  className="ms-3"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/profile"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span
                  className="ms-3"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  Profile
                </span>
              </Link>
            </li>
            <div className="absolute bottom-24 space-y-4">
              <li>
                <Link to="/" className="cursor-pointer ms-5">
                  Back to Home
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="cursor-pointer ms-5"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </aside>

      <div className={`p-4 lg:p-0 ${isSidebarOpen ? 'sm:ml-64' : ''} sm:ml-64`}>
        {/* dashboard content */}
        <div className="py-10 hidden lg:flex justify-end items-center bg-[#f9fafb]">
          <button>
            <span className="text-black mr-24">
              Welcome, {`${username}(${role})`}
            </span>
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
