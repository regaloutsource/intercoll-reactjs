import React from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

import logo from "../../../assets/img/debtManager.svg"
import './login.css'
import { useNavigate } from 'react-router';

import { FormValues } from '../../../domain/interfaces/FormValues';



const Login: React.FC = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values: FormValues) => {
      
      navigate('/dashboard')
    },
  });

  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  return (
    <Box component="div" className='login-div' >
      <Box className='login-header'>
      <img src={logo} alt='Debt Manager ' className='login-img'/>
      <Typography variant={isSmallScreen?'h6':'h3'} fontFamily='system-ui,monospace' fontWeight='bolder' ml={4}>DebtManagers</Typography>
      </Box>
      <Box mt='10vh'>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          size='small'
          color='success'
          className='form-login'
          id="username"
          name="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          sx={{mb:'1rem'}}
          
        />
        <TextField
          fullWidth
          size='small'
          color='success'
          className='form-login'
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{mb:'1rem'}}
          
        />
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </form>
      </Box>
    </Box>
  );
};

export default Login;