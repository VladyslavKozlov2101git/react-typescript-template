import { FC } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import clsx from 'clsx';

import styles from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

const ErrorPage: FC<ErrorPageProps> = ({ className = '' }) => {
  const error = useRouteError();
  console.log(error);

  if (isRouteErrorResponse(error) && typeof error.data === 'string') {
    return (
      <div className={clsx(styles.root, className)}>
        <h1>{error.status}</h1>
        <h2>{error.statusText || 'An error occurred'}</h2>
        <p>{error.data}</p>
      </div>
    );
  }

  // Handle generic errors
  if (error instanceof Error) {
    return (
      <div className={clsx(styles.root, className)}>
        <h3>Oops! Something went wrong! </h3>
        <details>
          <p>{error.message}</p>
        </details>
      </div>
    );
  }

  return <div className={clsx(styles.root, className)}>Something went wrong.</div>;
};

export default ErrorPage;
