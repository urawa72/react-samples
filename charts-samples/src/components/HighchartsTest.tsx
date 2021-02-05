import React from 'react';
import Highcharts from 'highcharts/highstock';
import Indicators from 'highcharts/indicators/indicators';
import Exporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import { generateData } from '../utils/generate-data';

Indicators(Highcharts);
Exporting(Highcharts);

const data = generateData();

// const data = [
//   [1612412370636, 300],
//   [1612412368636, 100],
//   [1612412369636, 200],
//   [1612412371636, 400],
// ];

const options = {
  title: {
    text: 'test',
  },
  series: [
    {
      data: data,
      name: 'Value',
    },
  ],
};

const HighchartsTest: React.FC = () => {
  return (
    <>
      <h1>Highcharts Test</h1>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </>
  );
};

export default HighchartsTest;
