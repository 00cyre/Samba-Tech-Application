
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { DialogActions, Button, Dialog, DialogTitle } from '@material-ui/core';
const styles = () => ({
    avatar: {
        backgroundColor: 'blue[100]',
        color: 'blue[600]',
    },
    sendmessage: {
        position: 'absolute',
        width: 262,
        height: 69,
        left: 0,
        bottom: 0,

        background: '#0A7A42',
        borderRadius: 5,
        textTransform: 'none',
        color: '#FFFFFF'
    },
});

const AlertModal = (props) => {

    const [open, setOpen] = React.useState(false);
    const { author, classes } = props;

    const handleClickOpen = () => {
        setOpen(true);
        props.sendSuggestion();
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className={classes.sendmessage}
                onClick={handleClickOpen}>
                Enviar Sugestão
                    </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title">{author + " sua mensagem foi enviada"}</DialogTitle>

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