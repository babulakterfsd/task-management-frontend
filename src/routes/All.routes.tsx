import DashboardLayout from '@/layouts/DashboardLayout';
import MainLayout from '@/layouts/MainLayout';
import NotFound from '@/pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';
import { dashboardRoutePaths } from './Dashboard.routes';
import { mainRoutePaths } from './Main.routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: mainRoutePaths,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: dashboardRoutePaths,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
