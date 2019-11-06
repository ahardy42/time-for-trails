const services = require('../services');
const {locationService} = services;

module.exports = async (req, res, next) => {
    let query = req.query;
    if ("q" in query) {
        let {q} = query;
        try {
            let data = await locationService.searchLocations(q);
            res.json(data);
        } catch(e) {
            next(e);
        }
    } else {
        let {id} = query;
        try {
            let data = await locationService.getLocationById(id);
            res.json(data);
        } catch(e) {
            next(e);
        }
    }
    
}