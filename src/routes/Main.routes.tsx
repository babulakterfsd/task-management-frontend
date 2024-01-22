import About from '@/pages/About';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';

export const mainRoutePaths = [
  { index: true, element: <Home /> },
  { path: 'about', element: <About /> },
  { path: 'login', element: <Login /> },
  { path: 'signup', element: <Signup /> },
];
