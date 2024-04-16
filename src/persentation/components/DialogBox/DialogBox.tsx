import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteDialogProps } from '../../../domain/types/deleteDialogProps';


const ResponsiveDialog:React.FC<deleteDialogProps> = (props) => {
  
    const {id,fullScreen,open,handleClose,removeItem} = props

  return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"

        BackdropProps={{
            style: {
              backgroundColor: 'rgba(0,0,0,0.2)',
            },
          }}
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are you sure you want to delete this entry?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {"This will be permanently deleted"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={() => removeItem(id)} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default ResponsiveDialog;