import React from 'react'

import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText  from '@mui/material/ListItemText'
import Typography  from '@mui/material/Typography'

import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import './agentsCheckedIn.css'


type IAgentsCheckedIn = {
    agentArray: Array<string>
}

const AgentsCheckedIn: React.FC<IAgentsCheckedIn> = (props) => {
    const { agentArray } = { ...props }
    return (
        <Card className='checkIn-list'>
            <Typography fontWeight='bold'>Agents Checked in</Typography>
            <List>
            {agentArray?.map((person, index) =>
            <React.Fragment key={index}>
             <ListItem className='listItem'>
                    <ListItemIcon sx={{ minWidth:'2rem'}}>
                        <PersonOutlineSharpIcon color='primary' fontSize='small'/>
                    </ListItemIcon>
                    <ListItemText
                        primary={person}
                        sx={{fontSize:'x-small'}}
                    />
                </ListItem>
                {(index!==agentArray.length - 1)?<Divider/>:null}
            </React.Fragment> 
            )}
        </List>
        </Card>
    )
}

export default AgentsCheckedIn;