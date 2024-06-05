import React from 'react'
import LineChart from '../../components/charts/LineChart'
import {mtdGnaChartData,ddChartData,monthPieChartData,monthToDateChartData,mtdCollectedChartData} from '../../../domain/constants/chartData'

import {mtdCollectedChartOptions,mtdGnaChartOptions,ddChartOptions,monthToDateChartOptions,monthPieChartOptions} from '../../../domain/constants/chartData'
import BarChart from '../../components/charts/BarChart'
import DoughnutChart from '../../components/charts/DoughnutChart'
import Box from '@mui/material/Box'



const DashboardMontly:React.FC = () => {
  return (
    <>
  <LineChart size={50} data={mtdGnaChartData} options={mtdGnaChartOptions}/>
  <BarChart size={50} data={ddChartData} options={ddChartOptions} />
  <LineChart size={50} data={monthToDateChartData} options={monthToDateChartOptions}/>
  <Box display='flex' justifyContent='space-between' alignContent='stretch'>
  <BarChart size={30} data={mtdCollectedChartData} options={mtdCollectedChartOptions}/>
  <DoughnutChart size={30} data={monthPieChartData} options={monthPieChartOptions}/>
  </Box>
</>
  )
}

export default DashboardMontly