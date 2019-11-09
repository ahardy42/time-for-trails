import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

import FormSubComponent from './FormSubComponent';

const useStyles = makeStyles({
    formControl: {
        width: "100%"
    },
    TextField: {
        width: "100%"
    }
})

const ModalComponent = ({variant, value, handleChange, handleSubmit, isOpen, handleClose}) => {
    const classes = useStyles();
    return (
        <Dialog open={isOpen} onClose={handleClose} aria-labelledby="dialog-title">
            <DialogTitle id="dialog-title">Change your {variant.toLowerCase()} selection</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Change your selection by using the form below:
                </DialogContentText>
                <FormSubComponent classes={classes} variant={variant} value={value} handleChange={handleChange} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ModalComponent;