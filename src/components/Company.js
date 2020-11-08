import React from 'react';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Map from './Map';
export default function Company(props) {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <br />
        <Button  variant="outlined" color="primary" onClick={handleClickOpen}>
        {props.name}
        </Button>
        <Dialog  fullWidth={true} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Company Location</DialogTitle>
            <Map>
            </Map>
        </Dialog>
      </div>
    );
  }