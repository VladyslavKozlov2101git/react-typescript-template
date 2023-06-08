import { FC } from 'react';
import '../assets/styles/main.scss';
import { ErrorBoundary } from '../shared';
import AppRoutes from '../routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './store';
import 'react-loading-skeleton/dist/skeleton.css';

interface AppProps {
  props?: string;
}

const App: FC<AppProps> = (props) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
