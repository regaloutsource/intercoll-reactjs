import React from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

import useTheme from '@mui/material/styles/useTheme';




// type IRegisterTargetForm = {
//     onSubmit: () => void;
// }


const RegisterTargetForm: React.FC = () => {

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const formik = useFormik({
    initialValues: {
      target: '',
      date: '',
    },
    validationSchema: Yup.object({
      target: Yup.number().required('DD Id  is required'),
      date: Yup.date().required('Date is required'),
    }),
    onSubmit: async (values) => {
          console.log(values)
    },
  });

  return (
      <form className='form-wrapper' onSubmit={formik.handleSubmit}>
        <TextField
          size="small"
          color="primary"
          name="target"
          label="Target"
          type='number'
          value={formik.values.target}
          onChange={formik.handleChange}
          error={formik.touched.target && Boolean(formik.errors.target)}
          helperText={formik.touched.target && formik.errors.target}
          sx={{ mb: '2rem' , width:smallScreen?'100%':'60%'}}
        />
        <TextField
          fullWidth
          size="small"
          color="primary"
          name="date"
          label="Date"
          type='date'
          value={formik.values.date}
          onChange={formik.handleChange}
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={formik.touched.date && formik.errors.date}
          sx={{ mb: '2rem' , width:smallScreen?'100%':'60%'}}
        />
        <Button type="submit" variant="contained">
          Add Target
        </Button>
      </form>
  );
};

export default RegisterTargetForm;