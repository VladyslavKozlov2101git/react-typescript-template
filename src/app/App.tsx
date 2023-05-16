import { FC } from 'react';
import '../assets/styles/main.scss';
import { ErrorBoundary } from '../shared';

interface AppProps {
  props?: string;
}

const App: FC<AppProps> = (props) => {
  return <ErrorBoundary>Hello</ErrorBoundary>;
};

export default App;
