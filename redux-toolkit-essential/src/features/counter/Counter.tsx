import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { decrement, increment, incrementByAmount } from './counterSlice';
import styles from './Counter.module.css';

const Counter: React.VFC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmout] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmout(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
