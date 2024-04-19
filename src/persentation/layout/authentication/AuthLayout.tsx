import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import './auth.css'
 import { ILayout } from '../../../domain/types/layoutProps';


const AuthLayout: React.FC<ILayout> = ({ Child }) => {

  return (
      <Box component='div' margin={0} className='main-auth-box'>
            <Box component='div' className='auth-box'>
              <Card className='auth-card'>
              {Child}
              </Card>
            </Box>
      </Box>
  );
};

export default AuthLayout;
