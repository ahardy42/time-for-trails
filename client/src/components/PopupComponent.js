import L from 'leaflet';
import { withLeaflet, DivOverlay } from 'react-leaflet';

class PopupComponent extends DivOverlay {
    createLeafletElement(props) {
        const {
            leaflet: { map },
            options,
            content
          } = props;

        const renderContent = ({link, imgLink, name}) => {
            return (
                `<div>
                    <h3>${name}</h3>
                    <img src='${imgLink}' alt='trail image' />
                    <a href='${link}' target='_blank'>here's some more info</a>
                </div>`
            )
        }
        const popup = L.popup(options).setContent(renderContent(content)).addTo(map);
        return popup;
    }
    
}


export default withLeaflet(PopupComponent);
