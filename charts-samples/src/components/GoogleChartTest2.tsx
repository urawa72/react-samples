import React from 'react';
import { Chart } from 'react-google-charts';
import { generateGoogleChartData } from '../utils/generate-data';

const timeData = generateGoogleChartData();

const GoogleChartTest2: React.FC = () => {
  return (
    <>
      <h1>Google Chart Test 2</h1>
      <Chart
        width={'100%'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[['Date', 'Value'], ...timeData]}
        options={{
          chartArea: { height: '80%', width: '90%' },
          hAxis: {},
          vAxis: {},
          legend: { position: 'bottom' },
        }}
        rootProps={{ 'data-testid': '3' }}
        chartPackages={['corechart', 'controls']}
        controls={[
          {
            controlType: 'ChartRangeFilter',
            options: {
              filterColumnIndex: 0,
              ui: {
                chartType: 'LineChart',
                chartOptions: {
                  chartArea: { width: '90%', height: '30%' },
                  hAxis: { baselineColor: 'none' },
                },
              },
            },
            controlPosition: 'bottom',
            controlWrapperParams: {},
          },
        ]}
      />
    </>
  );
};

export default GoogleChartTest2;
