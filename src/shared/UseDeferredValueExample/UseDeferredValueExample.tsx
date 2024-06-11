import { FC, memo, useDeferredValue, useState } from 'react';

import styles from './UseDeferredValueExample.module.scss';

interface SlowListProps {
  text: string;
}

const SlowList: FC<SlowListProps> = memo(function SlowList({ text }) {
  // Log once. The actual slowdown is inside SlowItem.
  console.log('[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />');

  const items: JSX.Element[] = [];
  for (let i = 0; i < 30; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className="items">{items}</ul>;
});

interface SlowItemProps {
  text: string;
}

const SlowItem: FC<SlowItemProps> = memo(function SlowItem({ text }) {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className={styles.item}>Text: {text}</li>;
});

interface UseDeferredValueExampleProps {
  className?: string;
}

const UseDeferredValueExample: FC<UseDeferredValueExampleProps> = () => {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);
  return (
    <>
      <input
        className={styles.input}
        placeholder="Please enter some text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <SlowList text={deferredText} />
    </>
  );
};

export default UseDeferredValueExample;
