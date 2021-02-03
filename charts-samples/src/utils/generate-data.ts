import { DateTime } from 'luxon';

const baseCount = 3000;
const now = DateTime.local();

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateData = (base = baseCount): [number, number][] => {
  const count = base * 3;
  const data: [number, number][] = [];
  const values = {
    value: [20, 25, 30, 35],
  };
  for (let i = 0; i < count; i++) {
    let index = 3;
    if (i <= base) index = 1;
    if (base < i && i <= base * 2) index = 2;

    data.push([
      now.plus({ minute: i * 5 }).toMillis(),
      getRandomNumber(values.value[index - 1], values.value[index]),
    ]);
  }
  return data;
};

export const generateRechartsData = (
  base = baseCount
): { timestamp: number; value: number }[] => {
  const count = base * 3;
  const data: { timestamp: number; value: number }[] = [];
  const values = {
    value: [20, 25, 30, 35],
  };
  for (let i = 0; i < count; i++) {
    let index = 3;
    if (i <= base) index = 1;
    if (base < i && i <= base * 2) index = 2;

    data.push({
      timestamp: now.plus({ minute: i * 5 }).toMillis(),
      value: getRandomNumber(values.value[index - 1], values.value[index]),
    });
  }
  return data;
};
