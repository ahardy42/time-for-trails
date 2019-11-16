import React, { useEffect } from 'react';
import { Popup, useLeaflet } from 'react-leaflet';

const PolyPopup = ({ trailsNum, mode, timeLimit, travelType }) => {

    const {popupContainer} = useLeaflet();

    // hook in case you change some choices when this popup is open
    useEffect(() => {
        popupContainer._popup.update();
    }, [trailsNum, mode, timeLimit, travelType]);

    return (
        <Popup>
            <div className="polygon-popup">
                <h3>What Does this Shape Mean?</h3>
                <p>
                    This shape represents how far you could {travelType} within your set timeframe of {timeLimit} minutes.
                </p>
                <h3>Summary of Trails Near You:</h3>
                {trailsNum > 0 ? (
                    <p>
                        Awesome! there {trailsNum > 1 ? "are" : "is"} {trailsNum} {mode} trail{trailsNum > 1 ? "s" : ""} that you have time for.
                    </p>
                ) : (
                    <p>
                        Bummer! There aren't any trails near you... Try changing the time limit, or type of travel using the button above.
                    </p>
                )}
            </div>
        </Popup>
    );
}

export default PolyPopup;