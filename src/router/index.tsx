import { ROUTES } from 'constants/routes';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage'));
const RootPage = lazy(() => import('pages/RootPage'));
const GoalCreation = lazy(() => import('pages/GoalCreationPage'));
const Channels = lazy(() => import('pages/ChannelsPage'));

const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.GOAL_CREATION,
        element: <GoalCreation />,
      },
      {
        path: ROUTES.CHANNELS,
        element: <Channels />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
