import React from 'react';
import useTimer from '../hooks/use-timer';

type Props = {
  limit: number;
};

const HooksSample: React.FC<Props> = ({ limit }) => {
  const [timeLeft, isPrime, reset] = useTimer(limit);

  return (
    <div>
      <h1>Hooks Sample</h1>
      <div className={isPrime ? 'HooksSample-primes' : undefined}>
        {timeLeft}
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default HooksSample;
