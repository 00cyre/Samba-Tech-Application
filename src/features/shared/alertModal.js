
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { DialogContent, DialogActions, Button, Dialog, DialogTitle, DialogContentText } from '@material-ui/core';
const styles = () => ({
    avatar: {
        backgroundColor: 'blue[100]',
        color: 'blue[600]',
    },
});

const AlertModal = (props) => {

    const [open, setOpen] = React.useState(false);
    const { author } = props;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open alert dialog
        </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title">{author + "Sua mensagem foi enviada"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
            </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default withStyles(styles)(AlertModal)