import { Suspense } from 'react';

import { RouterProvider } from 'react-router-dom';
import { router } from '../router';
import { LoaderModal } from 'components/Loaders/LoaderModal';

function App() {
  return (
    <Suspense fallback={<LoaderModal hide={false} withBackground={true} />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
