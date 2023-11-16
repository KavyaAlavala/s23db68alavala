var express = require('express');
const devices_controllers= require('../controllers/devices');
var router = express.Router();

/* GET home page. */
router.get('/', devices_controllers.devices_view_all_Page );
module.exports = router;
/* GET detail costume page */
router.get('/detail', devices_controllers.devices_view_one_Page);
