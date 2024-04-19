import React from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled }  from '@mui/material/styles'

import MuiAppBar from '@mui/material/AppBar';
import LogoutIcon from '@mui/icons-material/Logout';
import DateRangeIcon from '@mui/icons-material/DateRange';
import './navbar.css'

import { AppBarProps } from '../../../domain/interfaces/AppBarProps';
 

export type INavbar = {
  open: boolean,
  handleDrawerOpen: () => void
}

const drawerWidth = 240;
const drawerWidthSmall = 180;


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      [theme.breakpoints.down('md')]:{
        marginLeft: drawerWidthSmall,
        width: `calc(100% - ${drawerWidthSmall}px)`,
      },
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

const Navbar:React.FC<INavbar> = (props) => {
    const {open, handleDrawerOpen} = {...props}
      
  return (
    <AppBar position="fixed" open={open} >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: 5,
          ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon />
      </IconButton>
        <Box  component='div' className='main-appbar'>
         <DateRangeIcon className='main-appbar-child1'/>
         <Typography variant='h6' fontWeight='bolder' className='main-appbar-child2'>DebtManagers</Typography>
         <LogoutIcon className='main-appbar-child3'/> 
        </Box>
    
    </Toolbar>
  </AppBar>
  )
}

export default Navbar