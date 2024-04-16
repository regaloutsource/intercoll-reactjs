// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';
// import { ChartData, CoreChartOptions } from 'chart.js';

// interface DoughnutChartProps {
//   data: ChartData<'doughnut'>;
//   options?: CoreChartOptions<'doughnut'>;
// }

// function DoughnutChart({ data, options }: DoughnutChartProps) {
//   const canvas = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     if (canvas.current) {
//       const chart = new Chart(canvas.current, {
//         type: 'doughnut',
//         data: data,
//         options: options || {},
//       });

//       return () => {
//         chart.destroy();
//       };
//     }
//   }, [data, options]);

//   return <canvas ref={canvas}></canvas>;
// }

// export default DoughnutChart;

import React from 'react'
import { DoughnutProps } from '../../../domain/interfaces/Charts'
import { Card } from '@mui/material'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart:React.FC<DoughnutProps> = ({data,options}) => {
  return (
    <Card><Doughnut data={data} options={options}/></Card>
  )
}

export default DoughnutChart;