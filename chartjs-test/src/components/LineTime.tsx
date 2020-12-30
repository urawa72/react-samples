import React from 'react';
import { Line } from 'react-chartjs-2';
import { DateTime } from 'luxon';
// import 'chartjs-adapter-luxon';
import 'chartjs-plugin-zoom';

const now = DateTime.local();
const MAX_DATA_COUNT = 100;
const timeData = [...Array(MAX_DATA_COUNT)].map((_, i) => {
  return {
    y: Math.random(),
    x: now.plus({ second: i }).toMillis(),
  };
});

const data = {
  datasets: [
    {
      label: 'Time dataset',
      data: timeData,
    },
  ],
};

const options = {
  scales: {
    xAxes: [
      {
        type: 'time',
        display: true,
        unit: 'second',
        time: {
          displayFormats: {
            second: 'MM/DD hh:mm:ss',
          },
        },
      },
    ],
  },
  plugins: {
    zoom: {
      pan: {
        enabled: true,
        mode: 'x',
        rangeMin: {
          x: now.minus({ second: 100 }).toMillis(),
        },
        rangeMax: {
          x: timeData[MAX_DATA_COUNT - 1].x,
        },
      },
    },
  },
};

const LineTime: React.FC = () => {
  return (
    <div>
      <h2>Line Test</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineTime;
