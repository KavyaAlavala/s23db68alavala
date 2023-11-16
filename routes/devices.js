var express = require('express');
var devices_controller= require('../controllers/devices');
var router = express.Router();

/* GET home page. */
router.get('/', devices_controller.devices_view_all_Page );
/* GET detail costume page */
router.get('/detail', devices_controller.devices_view_one_Page);
/* GET create vehicle page */
router.get('/create', devices_controller.devices_create_Page);
/* GET create update page */
router.get('/update', devices_controller.devices_update_Page);
/* GET delete costume page */
router.get('/delete', devices_controller.devices_delete_Page);
module.exports = router;
