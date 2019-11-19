import React, { useState, useEffect } from 'react';
import { Popup } from 'react-leaflet';
import { Rating } from '@material-ui/lab';

const MyPopup = ({trail}) => {

    const [windowDimensions, setDimensions] = useState({
        height: 300,
        width: 300
    });

    const {name, imgSmall, url, summary, stars} = trail;

    const renderAttrText = url => {
        let reg = new RegExp('www.*.com');
        return reg.exec(url);
    }

    const dimensionSwitch = () => {
        // switch ()
    }

    useEffect(() => {
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
        });
    }, [])

    return (
        <Popup 
            options={{
                autoPan: true,
                // maxHeight: 25
            }}>
            <div className="popup-content">
                <div>
                    <h3>{name}</h3>
                    <Rating value={stars} size="small" readOnly />
                </div>
                <p>{summary}</p>
                <br/>
                {imgSmall.length ? <img src={imgSmall} alt='picture of the trail'/> : null}
                <br/>
                <a href={url} target='_blank' rel="noopener noreferrer">here's some more info from {renderAttrText(url)}</a>
            </div>
        </Popup>
    )
}

export default MyPopup;