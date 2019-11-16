import React from 'react';
import { Popup } from 'react-leaflet';

const MyPopup = ({trail}) => {

    const {name, imgSmall, url, summary} = trail;

    const renderAttrText = url => {
        let reg = new RegExp('www.*.com');
        return reg.exec(url);
    }

    return (
        <Popup 
            options={{
                autoPan: true,
                maxHeight: window.innerHeight * 0.3
            }}>
            <div className="popup-content">
                <h3>{name}</h3>
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