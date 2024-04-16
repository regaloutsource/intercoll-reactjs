import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { TextField, Button, Card, useMediaQuery } from '@mui/material';

import { useTheme } from '@mui/material/styles';

import './registerForm.css'


type RegisterAgentFormProps = {
    onSubmit: () => void;
}


const RegisterAgentForm = () => {

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const formik = useFormik({
    initialValues: {
      name: '',
      opCode: '',
      email: '',
      leaderEmail: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      opCode: Yup.string().required('OP Code is required'),
      email: Yup.string().email().required('Email is required'),
      leaderEmail: Yup.string().email().required('Leader Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
          console.log(values)
    },
  });

  return (
    <Card>
      <form className='form-wrapper' onSubmit={formik.handleSubmit}>
        <TextField
          size="small"
          color="primary"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ mb: '2em' , width:smallScreen?'100%':'40%'}}
        />
        <TextField
          fullWidth
          size="small"
          color="primary"
          name="opCode"
          label="OP Code"
          value={formik.values.opCode}
          onChange={formik.handleChange}
          error={formik.touched.opCode && Boolean(formik.errors.opCode)}
          helperText={formik.touched.opCode && formik.errors.opCode}
          sx={{ mb: '2em' , width:smallScreen?'100%':'40%'}}
        />
        <TextField
          fullWidth
          size="small"
          color="primary"
          type='email'
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ mb: '2em' , width:smallScreen?'100%':'40%'}}
        />
        <TextField
          fullWidth
          size="small"
          color="primary"
          type='email'
          name="leaderEmail"
          label="Leader Email"
          value={formik.values.leaderEmail}
          onChange={formik.handleChange}
          error={formik.touched.leaderEmail && Boolean(formik.errors.leaderEmail)}
          helperText={formik.touched.leaderEmail && formik.errors.leaderEmail}
          sx={{ mb: '2em' , width:smallScreen?'100%':'40%'}}
        />
        <TextField
          fullWidth
          color="primary"
          type='password'
          name="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ mb: '2em' , width:smallScreen?'100%':'40%'}}
        />

        <Button type="submit" variant="contained">
          Register
        </Button>
      </form>
      </Card>
  );
};

export default RegisterAgentForm;