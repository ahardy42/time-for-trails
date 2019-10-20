const services = require('../services');
const {returnProfile} = require('../utils');
const {runService} = services;

module.exports = async (req, res, next) => {
    // controller for sending back information to the router when the /api/trails/bike route is hit
    let {lat, lng, mode, time} = req.query;
    const body = {locations : [[parseFloat(lng), parseFloat(lat)]], range : [parseInt(time)]};
    const profile = returnProfile(mode)
    try {
        const response = await runService(lat, lng, body, profile);
        res.send(response);
    } catch(e) {
        next(e);
    }
}