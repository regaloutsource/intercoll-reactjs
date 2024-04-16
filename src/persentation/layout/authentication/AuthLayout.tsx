import React from 'react';
import { Box, Card, Grid } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import './auth.css'
 import { ILayout } from '../../../domain/types/layoutProps';


const AuthLayout: React.FC<ILayout> = ({ Child }) => {
  const isSmallScreen = useMediaQuery('(max-width: 900px)');

  return (
      <Box component='div' margin={0} className='main-auth-box'>
        {/* <Grid container spacing={2}>
          {isSmallScreen ? null : ( // Conditionally render image for larger screens
            <Grid item sm={0} md={4} lg={6}>
              <Box component='div' className='auth-img'></Box>
            </Grid>
          )} */}
          {/* <Grid item sm={12} md={8} lg={6} > */}
            <Box component='div' className='auth-box'>
              <Card className='auth-card'>
              {Child}
              </Card>
              
            </Box>
          {/* </Grid>
        </Grid> */}
      </Box>
  );
};

export default AuthLayout;
