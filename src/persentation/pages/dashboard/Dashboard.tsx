import React from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import useMediaQuery  from '@mui/material/useMediaQuery'

import AgentsCheckedIn from '../../components/AgentsCheckedIn/AgentsCheckedIn'
import FilterAgentButtonGroup from '../../components/FilterAgentButtonGroup/FilterAgentButtonGroup'
import AgentAttendanceCard from '../../components/agentAttendance/AgentAttendanceCard'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import DoughnutChart from '../../components/charts/DoughnutChart'

import { disputedChartData, dtrGnaChartData, moneyChartData, paymentChartData, redSlipsChartData, signupsChartData, visitsChartData } from '../../../domain/constants/chartData'
import { disputedChartOptions, dtrChartOptions, moneyChartOptions, paymentChartOptions, redSlipsChartOptions, signupsChartOptions, visitsChartOptions } from '../../../domain/constants/chartData'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';
import BarChart from '../../components/charts/BarChart'
import LineChart from '../../components/charts/LineChart'



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);




const arr = ['Minato Namekaze', 'Eren Yeager', 'Gojo Satoru','Tanjiro Kamado', 'Monkey De Luffy', 'Itadori Yuji', 'Megumi Fushiguro','Spike' , 'Roranova Zoro', 'John Doe', 'Jane Doe', 'Mark Robber', 'Tony Simpson', 'Asta', 'Gohan', 'Naruto Uzamaki', 'Aragi Kyomi', 'Mike Tyson', 'Joe Root', 'Steve Smith', 'Kane Williomson', 'Richard Doe', 'William Dane', 'Rebacaa Song', 'Bruce Wayne', 'Peter Parker', 'Anthony Stark', 'Pat Cummins', 'Daywne Johnson', 'Minato Namekaze', 'Eren Yeager', 'Gojo Satoru', 'Itadori Yuji', 'Megumi Fushiguro', 'Tanjiro Kamado', 'Luffy D Monkey', 'Roranova Zoro', 'John Doe', 'Jane Doe', 'Mark Robber', 'Tony Simpson', 'Asta', 'Gohan', 'Naruto Uzamaki', 'Aragi Kyomi', 'Mike Tyson', 'Joe Root', 'Steve Smith', 'Kane Williomson', 'Richard Doe', 'William Dane', 'Rebacaa Song', 'Bruce Wayne', 'Peter Parker', 'Anthony Stark', 'Pat Cummins', 'Daywne Johnson']



const Dashboard: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)')

  return (
    <Box overflow='auto'>
      <FilterAgentButtonGroup />
      <Grid container mt={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center' alignItems='flex-start'>
        <Grid item xs={12} sm={4} md={4} lg={2}>
          <Box>
           {
           (isSmallScreen)?
             <Accordion sx={{mt:'2'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Checked In Agents
              </AccordionSummary>
              <AccordionDetails>
              <AgentsCheckedIn agentArray={arr} />
              </AccordionDetails>
            </Accordion>: <AgentsCheckedIn agentArray={arr} /> }
          </Box>
        </Grid>
      
        <Grid item xs={12} sm={8} md={8} lg={7}>
          <Box display='flex' flexDirection='column' m={1}>
            <BarChart size={50} data={signupsChartData} options={signupsChartOptions} />
            <LineChart size={50} data={visitsChartData} options={visitsChartOptions} />
            <BarChart size={50} data={moneyChartData} options={moneyChartOptions} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center' alignItems='flex-start'>
            <AgentAttendanceCard />
            <Grid item xs={6} sm={6} md={6} lg={12}><DoughnutChart size={30} data={paymentChartData} options={paymentChartOptions} /></Grid>
            <Grid item xs={6} sm={6} md={6} lg={12}><DoughnutChart size={30} data={dtrGnaChartData} options={dtrChartOptions} /></Grid>
            <Grid item xs={6} sm={6} md={6} lg={12}><DoughnutChart size={30} data={disputedChartData} options={disputedChartOptions} /></Grid>
            <Grid item xs={6} sm={6} md={6} lg={12}><BarChart size={20} data={redSlipsChartData} options={redSlipsChartOptions} /></Grid>
          </Grid>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Dashboard