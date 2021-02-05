import React from 'react';
import { DateTime } from 'luxon';
import {
  Legend,
  ReferenceLine,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
} from 'recharts';

const now = DateTime.local();
const MAX_DATA_COUNT = 10000;
const timeData = [...Array(MAX_DATA_COUNT)].map((_, i) => {
  return {
    timestamp: now.plus({ second: i }).toFormat('y/MM/dd HH:mm:ss'),
    value: Math.random(),
  };
});

const TimeLineChart: React.FC = () => {
  return (
    <LineChart
      width={1200}
      height={600}
      data={timeData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" tick={{ fontSize: '.7rem' }} />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
      <ReferenceLine y={0} stroke="#000" />
      <Brush
        className="TimeLineChart-brush"
        dataKey="timestamp"
        stroke="#8884d8"
        startIndex={70}
        endIndex={99}
      />
      <Line dataKey="value" fill="#8884d8" />
    </LineChart>
  );
};

export default TimeLineChart;
