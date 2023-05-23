import { FC } from 'react';
import styles from './Users.module.scss';
import MainContainer from '../../containers/MainContainer';
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks';
import { usersSlice } from './slice/UsersSlice';

interface UsersProps {
  className?: string;
}

const Users: FC<UsersProps> = ({ className = '' }) => {
  const count = useAppSelector((state) => state.usersReducer.count);
  const { increment } = usersSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <MainContainer>
      <div className={`${styles.root} ${className}`}>
        <div>Counter: {count}</div>
        <button onClick={() => dispatch(increment(5))}>Add +1</button>
      </div>
    </MainContainer>
  );
};

export default Users;
