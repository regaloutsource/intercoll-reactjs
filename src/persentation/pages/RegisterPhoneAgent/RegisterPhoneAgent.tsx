import React from 'react'
import { Box, Typography } from '@mui/material'
import RegisterAgentForm from '../../components/RegisterAgentForm/RegisterAgentForm'

const RegisterPhoneAgent = () => {
  return (
    <Box>
    <Typography mb={4} variant='h5' fontWeight='bold'> Register Phone Agent</Typography>
    <RegisterAgentForm/>
  </Box>
  )
}

export default RegisterPhoneAgent