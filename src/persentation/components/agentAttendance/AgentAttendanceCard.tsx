import { Card, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

import './agentAttendanceCard.css'

const signups = 90
const visits = 234
const checkedIn = 67

const AgentAttendanceCard:React.FC = () => {
  return (
    <Card className='attendance-data-card'>
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