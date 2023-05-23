import { FC } from 'react';
import '../assets/styles/main.scss';
import { ErrorBoundary } from '../shared';
import AppRoutes from '../routes/AppRoutes';
import { Provider } from 'react-redux';
import { setupStore } from './rootReducer';

interface AppProps {
  props?: string;
}

const App: FC<AppProps> = (props) => {
  const store = setupStore();
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
