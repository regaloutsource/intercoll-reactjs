import React from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

import useTheme from '@mui/material/styles/useTheme';

import './registerForm.css'

import { IRegisterAgent } from '../../../domain/interfaces/gql/RegisterAgentInterface';

export interface RegisterAgentInput {
  name: string
  email: string
  opcode:string
  leaderEmail:string
  password:string
  role:number
  countryCode: string
}


type IRegisterAgentForm = {
  handleRegisterAgent: (input:IRegisterAgent) => Promise<void>
  handleClose: () => void
}

const RegisterAgentForm: React.FC<IRegisterAgentForm> = ({handleRegisterAgent,handleClose}) => {

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  
    
  const formik = useFormik({
    initialValues: {
      name: '',
      opcode: '',
      email: '',
      leaderEmail: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      opcode: Yup.string().required('OP Code is required'),
      email: Yup.string().email().required('Email is required'),
      leaderEmail: Yup.string().email().required('Leader Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values: Pick<RegisterAgentInput,'name' | 'email' |'opcode'|'leaderEmail'|'password'>) => {
            const input:IRegisterAgent ={
              name:values.name,
              email:values.email ,
              opcode:values.opcode ,
              leaderEmail:values.leaderEmail ,
              password:values.password
            } 
            await handleRegisterAgent(input);

            handleClose();
    }});

  return (
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
          sx={{ mb: '2rem' , width:smallScreen?'100%':'60%'}}
        />
        <TextField
          fullWidth
          size="small"
          color="primary"
          name="opcode"
          label="OP Code"
          value={formik.values.opcode}
          onChange={formik.handleChange}
          error={formik.touched.opcode && Boolean(formik.errors.opcode)}
          helperText={formik.touched.opcode && formik.errors.opcode}
          sx={{ mb: '2rem' , width:smallScreen?'100%':'60%'}}
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
          sx={{ mb: '2rem' , width:smallScreen?'100%':'60%'}}
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
          sx={{ mb: '2rem' , width:smallScreen?'100%':'60%'}}
        />
        <TextField
          fullWidth
          color="primary"
          size='small'
          type='password'
          name="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ mb: '2rem' , width:smallScreen?'100%':'60%'}}
        />

        <Button type="submit" variant="contained">
          Register
        </Button>
      </form>
  );
};

export default RegisterAgentForm;