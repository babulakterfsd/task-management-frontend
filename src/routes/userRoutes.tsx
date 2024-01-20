import { Route } from '@tanstack/react-router';
import About from '../pages/About';
import Counter from '../pages/Counter';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Ongoing from '../pages/Ongoing';
import Todo from '../pages/Todo';
import { rootRoute } from './rootRoute';

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => <About />,
});

const counterRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/counter',
  component: () => <Counter />,
});

const ongoingRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/ongoing',
  component: () => <Ongoing />,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: () => <Login />,
});

const todoRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/todo',
  component: () => <Todo />,
});

const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '*',
  component: () => <NotFound />,
});

const userRoutes = [
  indexRoute,
  aboutRoute,
  counterRoute,
  ongoingRoute,
  loginRoute,
  todoRoute,
  notFoundRoute,
];

export default userRoutes;
