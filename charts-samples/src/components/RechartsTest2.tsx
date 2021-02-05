import React from 'react';
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
import { DateTime } from 'luxon';
import { generateRechartsData } from '../utils/generate-data';

const BASE_DATA_COUNT = 10000;
const timeData = generateRechartsData(BASE_DATA_COUNT);
// const timeData = [
//   { timestamp: 1612412370636, value: 300 },
//   { timestamp: 1612412368636, value: 100 },
//   { timestamp: 1612412369636, value: 200 },
//   { timestamp: 1612412371636, value: 400 },
// ];

const TimeLineChart: React.FC = () => {
  return (
    <div>
      <h1>Recharts Test2</h1>
      <section className="baseline-container card">
        <LineChart
          width={1200}
          height={600}
          data={timeData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            tick={{ fontSize: '.7rem' }}
            tickFormatter={(timestamp) =>
              DateTime.fromMillis(timestamp).toFormat('HH:mm:ss')
            }
          />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush
            className="TimeLineChart-brush"
            dataKey="timestamp"
            stroke="#8884d8"
            tickFormatter={(timestamp) =>
              DateTime.fromMillis(timestamp).toFormat('HH:mm:ss')
            }
          />
          <Line dataKey="value" fill="#8884d8" />
        </LineChart>
      </section>
    </div>
  );
};

export default TimeLineChart;
