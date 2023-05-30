import { FC, ChangeEvent, useEffect, useState } from 'react';
import styles from './UseDebounceExample.module.scss';
import { useDebounce } from '../../helpers/hooks';

interface UseDebounceExampleProps {
  className?: string;
}

const UseDebounceExample: FC<UseDebounceExampleProps> = ({ className = '' }) => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  // Fetch API (optional)
  useEffect(() => {
    // Do fetch here...
    // Triggers when "debouncedValue" changes
  }, [debouncedValue]);

  return (
    <div className={`${styles.root} ${className}`}>
      <p className={styles.title}>Value real-time: {value}</p>
      <p className={styles.title}>Debounced value: {debouncedValue}</p>
      <input
        className={styles.input}
        type="text"
        placeholder={'Please enter some text'}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default UseDebounceExample;
