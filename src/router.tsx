import { createBrowserRouter } from 'react-router-dom';
import { FillerWordCounter } from './FillerWordCounterPage/FillerWordCounterPage';
import { FillerWordListPage } from './FillerWordListPage/FillerWordListPage';
import { Home } from './Home';

import { PeopleListPage } from './PeopleListPage/PeopleListPage';

export const ROUTES = {
  HOME: '/',
  PEOPLE: '/people',
  WORD_COUNTER: '/word-counter',
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
    path: ROUTES.WORD_COUNTER,
    element: <FillerWordCounter />,
  },
  {
    path: ROUTES.WORDS,
    element: <FillerWordListPage />,
  },
]);
