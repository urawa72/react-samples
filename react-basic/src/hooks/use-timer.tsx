import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getPrimes } from '../utils/get-primes';

const useTimer = (limit: number): [number, boolean, () => void] => {
  const [timeLeft, setTimeLeft] = useState(limit);
  const primes = useMemo(() => getPrimes(limit), [limit]);
  const reset = useCallback(() => setTimeLeft(limit), [limit]);
  const tick = () => setTimeLeft((t) => t - 1);
  // 再レンダリングを伴わないデータを保持
  const timerId = useRef<NodeJS.Timeout>();
  // メモ化していないので都度計算される
  // const primes = getPrimes(limit);
  // 関数メモ化しないとuseEffectが毎回実行されてしまう
  // const reset = () => setTimeLeft(limit);

  useEffect(() => {
    console.log('timer start side-effect');
    const clearTimer = () => {
      if (timerId.current) clearInterval(timerId.current);
    };
    reset();
    clearTimer();
    timerId.current = setInterval(tick, 1000);
    return clearTimer;
  }, [limit, reset]);

  useEffect(() => {
    console.log('check reset side-effect');
    if (timeLeft === 0) reset();
  }, [timeLeft, reset]);

  return [timeLeft, primes.includes(timeLeft), reset];
};

export default useTimer;
