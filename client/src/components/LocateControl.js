import L from 'leaflet';
import { withLeaflet, MapControl } from 'react-leaflet';
import 'leaflet.locatecontrol';

class LocateControl extends MapControl {
  createLeafletElement(props) {
    const {
      leaflet: { map },
      options
    } = props;
    console.log(options);
    const lc = L.control.locate(options).addTo(map);
    return lc;
  }
}
export default withLeaflet(LocateControl);