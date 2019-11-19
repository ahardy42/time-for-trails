const express = require('express');
const router = express.Router();
const controller = require('../controller');

router.get("/trails/bike", controller.bikeController);

router.get("/trails/run", controller.runController);

router.get("/trails/hike", controller.hikeController);

router.get("/trails/ski", controller.skiController);

router.get("/trails/climb", controller.climbController);

router.get("/location", controller.locationController);

module.exports = router;