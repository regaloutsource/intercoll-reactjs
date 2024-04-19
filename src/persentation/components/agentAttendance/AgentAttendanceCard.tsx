import React from 'react'

import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText  from '@mui/material/ListItemText'

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

import './agentAttendanceCard.css'

const signups = 90
const visits = 234
const checkedIn = 67

const AgentAttendanceCard:React.FC = () => {
  return (
    <Card sx={{width:'100%'}}>
        <List>

          <ListItem>
            <ListItemIcon><AccountBoxIcon color='primary'/></ListItemIcon>
            <ListItemText>Sign ups : {signups}</ListItemText>
          </ListItem>

          <Divider/>

          <ListItem>
            <ListItemIcon><DirectionsWalkIcon color='primary'/></ListItemIcon>
            <ListItemText>Visits : {visits}</ListItemText>
          </ListItem>

          <Divider/>

          <ListItem>
            <ListItemIcon><CheckCircleIcon color='primary'/></ListItemIcon>
            <ListItemText>Checked In : {checkedIn}</ListItemText>
          </ListItem>

        </List>
    </Card>
  )
}

export default AgentAttendanceCard