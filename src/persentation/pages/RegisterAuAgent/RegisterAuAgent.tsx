import React from 'react'
import { Box, Typography } from '@mui/material'
import RegisterAgentForm from '../../components/RegisterAgentForm/RegisterAgentForm'

const RegisterAuAgent = () => {
  return (
    <Box>
      <Typography mb={4} variant='h5' fontWeight='bold'> Register Au Agent</Typography>
      <RegisterAgentForm/>
    </Box>
  )
}

export default RegisterAuAgent