import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';
import 'react-loading-skeleton/dist/skeleton.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from './store';

import '../assets/styles/main.scss';
import { router } from '../routes/routes';

import { logError } from '@helpers/functions';

import ErrorFallback from '@shared/ErrorFallback';

interface AppProps {
  props?: string;
}

const App: FC<AppProps> = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster position="bottom-right" />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
