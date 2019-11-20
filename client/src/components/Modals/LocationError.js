import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';

// component to show the user that location services aren't working for them!

const LocationError = ({isOpen, handleClose, message, goHome, goToFairbanks}) => {
    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            disableBackdropClick
            disableEscapeKeyDown
            aria-labelledby="location-alert-title"
            aria-describedby="location-alert-message"
        >
            <DialogTitle id="location-alert-title">Bummer! Your Location is Unavailable...</DialogTitle>
            <DialogContent>
                <DialogContentText id="location-alert-message">
                    Your browser is telling me: "{message}". You can either be taken to a surprise location, or go home and search for one.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={goHome}>Take Me Home</Button>
                <Button onClick={goToFairbanks}>Take Me To...</Button>
            </DialogActions>
        </Dialog>
    );
}

export default LocationError;