import React from 'react'
import { BarProps } from '../../../domain/interfaces/Charts'
import { Bar } from 'react-chartjs-2';
import { Card } from '@mui/material';

const BarChart:React.FC<BarProps> = ({data,options,size}) => {
  return (
    <Card sx={{height:`${size}vh !important`}}><Bar data={data} options={options}/></Card>
  )
}

export default BarChart;