import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/Navbar/Navbar';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import './main.css';

import { ILayout } from '../../../domain/types/layoutProps';


const MainLayout:React.FC<ILayout> = ({Child}) => {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <Box component='div' display='flex'className='main-layout-box' >
      <CssBaseline/>
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen}/>
      <SideBar open={open} handleDrawerClose={handleDrawerClose}/>
      <Box sx={{flexGrow:1, padding:'1em'}}>
        <Toolbar/>
        {Child}
        </Box>
    </Box>
   
  )
}

export default MainLayout