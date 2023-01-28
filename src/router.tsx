import { createBrowserRouter } from 'react-router-dom';
import { FillerWordListPage } from './FillerWordListPage/FillerWordListPage';
import { Home } from './Home';

import { PeopleListPage } from './PeopleListPage/PeopleListPage';

export const ROUTES = {
  HOME: '/',
  PEOPLE: '/people',
  WORDS: '/words',
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
  {
    path: ROUTES.WORDS,
    element: <FillerWordListPage />,
  },
]);
