import React from 'react'
import { DoughnutProps } from '../../../domain/interfaces/Charts'
import { Card } from '@mui/material'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart:React.FC<DoughnutProps> = ({data,options,size}) => {
  return (
    <Card sx={{height:`${size}vh !important`}}><Doughnut data={data} options={options}/></Card>
  )
}

export default DoughnutChart;