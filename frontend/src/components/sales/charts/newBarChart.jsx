import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
      width:"100%",
      colors: ["rgba(100, 39, 255, 0.5)", "rgba(196, 156, 26, 0.5)"],
    },
  },
};
const dataset = [
  {

    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {

    newYork: 78,
    seoul: 28,
    month: 'Fev',
  },
  {

    newYork: 106,
    seoul: 41,
    month: 'Mar',
  },
  {

    newYork: 92,
    seoul: 73,
    month: 'Apr',
  },
  {

    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {

    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {

    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {

    newYork: 106,
    seoul: 249,
    month: 'Aug',
  },
  {

    newYork: 95,
    seoul: 131,
    month: 'Sept',
  },
  {

    newYork: 97,
    seoul: 55,
    month: 'Oct',
  },
  {
  
    newYork: 76,
    seoul: 48,
    month: 'Nov',
  },
  {
    
    newYork: 103,
    seoul: 25,
    month: 'Dec',
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        
        { dataKey: 'newYork', label: 'New York', valueFormatter ,color:"rgba(100, 39, 255, 0.5)"},
        { dataKey: 'seoul', label: 'Seoul', valueFormatter ,color:"rgba(196, 156, 26, 0.5)"},
      ]}
      {...chartSetting}
    />
  );
}