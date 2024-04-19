import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


type Idialog = {
  id: number
  fullScreen: boolean,
  open: boolean,
  title: string,
  content: JSX.Element,
  handleClose: ()=>void,
  actionName: string
  // action: ((id: number) => void) | ((id: string) => void);
  action: (id: number) =>void
}

const ResponsiveDialog:React.FC<Idialog> = (props) => {
  
    const {id,fullScreen,open,handleClose,title,content,actionName,action} = props

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
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={() => action(id)} autoFocus>
            {actionName}
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default ResponsiveDialog;