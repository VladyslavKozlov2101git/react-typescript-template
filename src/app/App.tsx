import { FC } from 'react';
import '../assets/styles/main.scss';
import { ErrorBoundary } from '../shared';
import AppRoutes from '../routes/AppRoutes';

interface AppProps {
  props?: string;
}

const App: FC<AppProps> = (props) => {
  return (
    <ErrorBoundary>
      <AppRoutes />
    </ErrorBoundary>
  );
};

export default App;
