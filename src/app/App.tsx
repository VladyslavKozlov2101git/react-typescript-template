import { FC } from 'react';
import { Toaster } from 'react-hot-toast';
import 'react-loading-skeleton/dist/skeleton.css';
import { Provider } from 'react-redux';

import '../assets/styles/main.scss';
import AppRoutes from '../routes/AppRoutes';
import { ErrorBoundary } from '../shared';
import { store } from './store';

interface AppProps {
  props?: string;
}

const App: FC<AppProps> = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AppRoutes />
        <Toaster position="bottom-right" />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
