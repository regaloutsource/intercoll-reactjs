import { Box, Typography } from '@mui/material'
import React from 'react'
import RegisterAgentForm from '../../components/RegisterAgentForm/RegisterAgentForm'

const RegisterFieldAgent = () => {
  return (
    <Box>
      <Typography mb={4} variant='h5' fontWeight='bold'> Register Field Agent</Typography>
      <RegisterAgentForm/>
    </Box>
  )
}

export default RegisterFieldAgent