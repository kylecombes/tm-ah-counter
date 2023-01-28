import { createBrowserRouter } from 'react-router-dom';
import { Home } from './Home';

import { PeopleListPage } from './PeopleListPage/PeopleListPage';

export const ROUTES = {
  HOME: '/',
  PEOPLE: '/people',
};

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.PEOPLE,
    element: <PeopleListPage />,
  },
]);
