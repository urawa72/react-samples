import React from 'react';
import Highcharts from 'highcharts/highstock';
import Indicators from 'highcharts/indicators/indicators';
import Exporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import { generateData } from '../utils/generate-data';

Indicators(Highcharts);
Exporting(Highcharts);

const data = generateData();

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
