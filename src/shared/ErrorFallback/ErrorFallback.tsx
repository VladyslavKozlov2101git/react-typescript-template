import { FC } from 'react';

import clsx from 'clsx';

import styles from './ErrorFallback.module.scss';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
  className?: string;
}

const ErrorFallback: FC<ErrorFallbackProps> = ({ error, resetErrorBoundary, className = '' }) => {
  return (
    <div className={clsx(styles.root, className)} role="alert">
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default ErrorFallback;
