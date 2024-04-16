import { Box, Card, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import './agentsCheckedIn.css'
import { AgentsCheckedInProps } from '../../../domain/types/agentsCheckedIn';



const AgentsCheckedIn: React.FC<AgentsCheckedInProps> = (props) => {
    const { agentArray } = { ...props }
    return (
        <Card className='checkIn-list'>
            <Typography fontWeight='bold'>Agents Checked in</Typography>
            <List>
            {agentArray.map((person, idx) =>
            <React.Fragment key={idx}>
             <ListItem className='listItem'>
                    <ListItemIcon>
                        <PersonOutlineSharpIcon color='primary'/>
                    </ListItemIcon>
                    <ListItemText
                        primary={person}
                    />
                </ListItem>
                {(idx!==agentArray.length - 1)?<Divider/>:null}
            </React.Fragment> 
            )}
        </List>
        </Card>
    )
}

export default AgentsCheckedIn;