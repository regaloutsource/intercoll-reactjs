import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '16px',
  boxShadow: 24,
  p: 4,
};
type IregistrationModel = {
  modelHeading: string,
  open:boolean,
  handleClose: ()=>void,
  child: JSX.Element,
}

const RegisterModal:React.FC<IregistrationModel> = (props) => {

  const {open,handleClose,modelHeading,child} = props
  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight='bold'>
            {modelHeading}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {child}
          </Typography>
        </Box>
      </Modal>
  );
}

export default RegisterModal;