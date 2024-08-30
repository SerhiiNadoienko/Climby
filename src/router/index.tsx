import { ROUTES } from 'constants/routes';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage'));
const RootPage = lazy(() => import('pages/RootPage'));
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
      /*  {
                      path: `${ROUTES.SPECIFIC_APPLICATION}/:loanId`,
                      element: <SpecificApplicationPage />,
                    },  */
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
