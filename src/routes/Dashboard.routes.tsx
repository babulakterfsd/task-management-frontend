import DashboardHome from '@/components/dashboard/DashboardHome';
import MyProfile from '@/components/dashboard/MyProfile';
import NotFound from '@/pages/NotFound';

export const dashboardRoutePaths = [
  { index: true, element: <DashboardHome /> },
  { path: 'profile', element: <MyProfile /> },
  { path: '*', element: <NotFound /> },
];
