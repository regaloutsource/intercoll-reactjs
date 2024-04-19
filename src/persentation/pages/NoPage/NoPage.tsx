import React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import './noPage.css'

const handleClick = ( ) => {
  //TODO: implement the logic to navigate to dashboard and the dashboard link on the sidebar remains active 
}

const NoPage:React.FC = () => {
    
  return (
    <Box component='div' className='noPage-box'>
        <Typography variant='h2'>Error 404!! </Typography>
        <Typography variant='subtitle1'>Page not Found</Typography>
        <Button href='../dashboard' variant='contained' onClick={handleClick} sx={{mt:'1rem'}}> Back to HomePage </Button>
    </Box>
  )
}

export default NoPage