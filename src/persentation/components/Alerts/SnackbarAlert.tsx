import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type ISnackbarAlert = {
    open: boolean,
    message: string,
    severity:'error' | 'info' |'success' |'warning',
    handleClose: () => void, 
}

const SnackbarAlert:React.FC<ISnackbarAlert> = (props) => {
    const {open,message,severity,handleClose} = props
  return (
    <Snackbar
    open={open}
    autoHideDuration={5000}
    anchorOrigin={{vertical:'top',horizontal:'center'}}
    onClose={handleClose}
    message={message}
  >
    <Alert severity={`${severity}`} onClose={handleClose}>
      {message}
    </Alert>
</Snackbar>
  )
}

export default SnackbarAlert;