import React from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

import useTheme from '@mui/material/styles/useTheme';


type IRegisterDdForm = {
    onSubmit: (props: any) => Promise<void>;
}


const RegisterDdForm: React.FC<IRegisterDdForm> = ({onSubmit}) => {

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const formik = useFormik({
    initialValues: {
      dd: '',
      date: '',
    },
    validationSchema: Yup.object({
      dd: Yup.number().required('DD Id  is required'),
      date: Yup.date().required('Date is required'),
    }),
    onSubmit: async (values) => {
          const input = {
            dds: values.dd,
            date: values.date,
          }
          await onSubmit(input)
    }
  });

  return (
      <form className='form-wrapper' onSubmit={formik.handleSubmit}>
        <TextField
          size="small"
          color="primary"
          name="dd"
          label="Manual DD"
          type='number'
          value={formik.values.dd}
          onChange={formik.handleChange}
          error={formik.touched.dd && Boolean(formik.errors.dd)}
          helperText={formik.touched.dd && formik.errors.dd}
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
          Add DD
        </Button>
      </form>
  );
};

export default RegisterDdForm;