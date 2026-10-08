import { FC, ReactElement, memo, useDeferredValue, useState } from 'react';

import styles from './UseDeferredValueExample.module.scss';

interface SlowListProps {
  text: string;
}

const SlowList: FC<SlowListProps> = memo(({ text }) => {
  // Log once. The actual slowdown is inside SlowItem.
  console.log('[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />');

  const items: ReactElement[] = [];
  for (let i = 0; i < 30; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className="items">{items}</ul>;
});

interface SlowItemProps {
  text: string;
}

const SlowItem: FC<SlowItemProps> = memo(({ text }) => {
  // oxlint-disable-next-line react/purity -- the impurity is the point: artificial slowdown to demo useDeferredValue
  const startTime = performance.now();
  // oxlint-disable-next-line react/purity
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className={styles.item}>Text: {text}</li>;
});

interface UseDeferredValueExampleProps {
  className?: string;
}

const UseDeferredValueExample: FC<UseDeferredValueExampleProps> = () => {
  const [text, setText] = useState(''),
    deferredText = useDeferredValue(text);
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
