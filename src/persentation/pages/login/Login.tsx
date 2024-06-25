import React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from "../../../assets/img/debtManager.svg"
import './login.css'

import { useMutation }  from '@apollo/client/react/hooks/useMutation'
import { gql } from '@apollo/client/core/index';
import { useNavigate } from 'react-router';

import { FormValues } from '../../../domain/interfaces/FormValues';
import { routes } from '../../../routes/routes'

import { loginFailure,loginSuccess } from '../../../redux/slices/auth.slice';
import { useDispatch } from 'react-redux';

import SnackbarAlert from '../../hoc/Alerts/SnackbarAlert';

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password){
      token
    }
  }
`;

interface AlertState {
  open: boolean;
  message: string;
}


const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION);
  const [alert, setAlert] = useState<AlertState>({ open: false, message: "" })
  const dispatch = useDispatch();

  const handleClose = () => {
    setAlert({open:false,message:''})
  }

  // const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setAlert({open:false,message:''})
  // };

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
      try {
        const { data } = await loginMutation({
          variables: {
            username: values.username,
            password: values.password,
          },
        });
        dispatch(loginSuccess(data?.login.token))
        navigate(routes.DASHBOARD); // Redirect after successful login
      } catch (error : any) {
        console.log(error?.message)
        dispatch(loginFailure(error?.message))

        if (error.message === 'PASSWORD_INVALID') {
          setAlert({ open: true, message: 'Incorrect password. Please try again.' });
          console.log(error.message)
        } else if (error?.message === 'USERNAME_NOT_FOUND') {
          setAlert({ open: true, message: 'Username not found. Please check your username.' });
        } else {
          setAlert({ open: true, message: 'An error occurred. Please try again later.' });
        }
      }
    },
  });

  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  return (
    <Box component="div" className='login-div'>
      <Box className='login-header'>
        <img src={logo} alt='Debt Manager' className='login-img' />
        <Typography variant={isSmallScreen ? 'h6' : 'h3'} fontFamily='system-ui,monospace' fontWeight='bolder' ml={4}>DebtManagers</Typography>
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
            sx={{ mb: '1rem' }}
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
            sx={{ mb: '1rem' }}
          />
          <Button type="submit" variant="contained" fullWidth disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </Box>
      <SnackbarAlert open={alert.open} message={alert.message} handleClose={handleClose} severity='error' />
    </Box>
  );
};

export default Login;
