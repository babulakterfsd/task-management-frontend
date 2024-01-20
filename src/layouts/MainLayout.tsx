import { Outlet } from '@tanstack/react-router';
import Navbar from '../components/common/Navbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex flex-col px-2 sm:px-0 mt-8 md:mt-24">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
