import React from 'react'
import { LineProps } from '../../../domain/interfaces/Charts'
import { Card } from '@mui/material'
import { Line } from 'react-chartjs-2'

const LineChart:React.FC<LineProps> = ({data,options,size}) => {
  return (
    <Card sx={{height:`${size}vh !important`}}><Line data={data} options={options}/></Card>
  )
}

export default LineChart