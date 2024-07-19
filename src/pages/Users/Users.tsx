import { FC, useEffect } from 'react';

import styles from './Users.module.scss';

import { useAppDispatch, useAppSelector } from '../../app/reduxHooks';

import { fetchUsers } from '@redux/UsersSlice/UsersActions';

interface UsersProps {
  className?: string;
}

const Users: FC<UsersProps> = ({ className = '' }) => {
  const { isLoading, error, users } = useAppSelector((state) => state.usersReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className={`${styles.root} ${className}`}>
      {isLoading && <div>Loading...</div>}
      {error && <h3>{error}</h3>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
