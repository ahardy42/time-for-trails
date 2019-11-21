/**
 * This is going to prettify the name of locations coming from nominatim's search...
 * if there is a city or town in the detailed address, then construct a pretty name. if not, return the location's display name
 * here is incoming an incoming format example for "berlin germany":
 *  
 * {
        "place_id": 595794,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 240109189,
        "boundingbox": [
            "52.3570365",
            "52.6770365",
            "13.2288599",
            "13.5488599"
        ],
        "lat": "52.5170365",
        "lon": "13.3888599",
        "display_name": "Berlin, 10117, Deutschland",
        "class": "place",
        "type": "city",
        "importance": 0.922149797630868,
        "icon": "https://nominatim.openstreetmap.org/images/mapicons/poi_place_city.p.20.png",
        "address": {
            "city": "Berlin",
            "state": "Berlin",
            "postcode": "10117",
            "country": "Deutschland",
            "country_code": "de"
        }
    }
 */


export const prettyName = location => {

    const {address, display_name, type} = location;

    if (("city" in address || "town" in address) && "state" in address) {
        return {
            primary: address.city ? `${address.city}, ${address.state}` : `${address.town}, ${address.state}`,
            secondary: `${address.country}`
        }
    } else {
        return {
            primary: display_name,
            secondary: `${type} in ${address.country}`
        }
    }
}