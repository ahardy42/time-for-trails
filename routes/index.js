const express = require('express');
const router = express.Router();
const path = require("path");

const apiRoutes = require('./apiRoutes');
// routes import
router.use('/api', apiRoutes);

/* GET home page. */
router.use( (req, res, next) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
