var express = require('express');
const devices_controllers= require('../controllers/devices');
var router = express.Router();

/* GET home page. */
router.get('/', devices_controllers.devices_view_all_Page );
module.exports = router;
