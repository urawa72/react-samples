import React, { useCallback, useState } from 'react';
import {
  ComposedChart,
  Legend,
  ReferenceLine,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
} from 'recharts';
import { DateTime } from 'luxon';
import { generateRechartsData } from '../utils/generate-data';

const BASE_DATA_COUNT = 3000;
const timeData = generateRechartsData(BASE_DATA_COUNT);

interface Index {
  startIndex: number;
  endIndex: number;
}

const RechartsTest: React.FC = () => {
  const [index, setIndex] = useState<Index>({
    startIndex: 0,
    endIndex: BASE_DATA_COUNT,
  });

  const handleUpdate = useCallback((i: Index) => {
    setIndex(i);
  }, []);

  return (
    <div>
      <h1>Recharts Test</h1>
      <section className="baseline-container card">
        <header>Baseline View</header>
        <main>
          <ComposedChart
            width={1024}
            height={600}
            data={timeData.slice(index.startIndex, index.endIndex + 1)}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <Legend verticalAlign="bottom" />
            <Line
              isAnimationActive={false}
              type="monotone"
              dataKey="value"
              dot={false}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="timestamp"
              allowDataOverflow
              tickFormatter={(timestamp) =>
                DateTime.fromMillis(timestamp).toFormat('HH:mm:ss')
              }
              type="number"
              scale="time"
            />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip />
            <ReferenceLine y={0} stroke="#000" />
          </ComposedChart>
        </main>
      </section>
      <section className="card">
        <header>Timeline View</header>
        <main>
          <div className="chart-container">
            <div className="chart-base">
              <ComposedChart width={1024} height={100} data={timeData}>
                <YAxis domain={['auto', 'auto']} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  dot={false}
                  isAnimationActive={false}
                />
              </ComposedChart>
            </div>
            <div className="chart-brush">
              <ComposedChart width={1024} height={100} data={timeData}>
                <YAxis domain={['auto', 'auto']} />
                <Brush
                  height={100}
                  startIndex={index.startIndex}
                  endIndex={index.endIndex * 3 - 1}
                  fill="rgba(0, 0, 0, 0)"
                  dataKey="timestamp"
                  data={timeData}
                  onChange={handleUpdate}
                />
              </ComposedChart>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default RechartsTest;
