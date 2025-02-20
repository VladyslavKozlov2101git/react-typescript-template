import { FC } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import clsx from 'clsx';

import styles from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

interface ErrorResponse {
  status: number;
  statusText?: string;
  internal?: boolean;
  data: string;
}

const ErrorPage: FC<ErrorPageProps> = ({ className = '' }) => {
  const error = useRouteError();

  console.log(error);

  if (isRouteErrorResponse(error) && typeof error.data === 'string') {
    const errorResponse = error as ErrorResponse;
    return (
      <div className={clsx(styles.root, className)}>
        <h1>{errorResponse.status}</h1>
        <h2>{errorResponse.statusText || 'An error occurred'}</h2>
        <p>{errorResponse.data}</p>
      </div>
    );
  }

  return <div className={clsx(styles.root, className)}>Something went wrong. </div>;
};

export default ErrorPage;
