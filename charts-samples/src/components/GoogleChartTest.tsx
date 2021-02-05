import React from 'react';
import { Chart } from 'react-google-charts';
import { generateGoogleChartData } from '../utils/generate-data';

const timeData = generateGoogleChartData();

const GoogleChartTest: React.FC = () => {
  return (
    <>
      <h1>Google Chart Test 1</h1>
      <Chart
        chartType="AnnotationChart"
        rows={timeData}
        columns={[
          {
            type: 'date',
            label: 'Date',
          },
          {
            type: 'number',
            label: 'Value',
          },
        ]}
        options={{
          displayAnnotations: false,
        }}
        width={'900px'}
        height={'600px'}
        legendToggle
      />
    </>
  );
};
export default GoogleChartTest;
