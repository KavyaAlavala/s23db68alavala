var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var devices_controller = require('../controllers/devices');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// devices ROUTES ///
// POST request for creating a devices.
router.post('/devices', devices_controller.devices_create_post);
// DELETE request to delete devices.
router.delete('/devices/:id', devices_controller.devices_delete);
// PUT request to update devices.
router.put('/devices/:id', devices_controller.devices_update_put);
// GET request for one devices.
router.get('/devices/:id', devices_controller.devices_detail);
// GET request for list of all devices items.
router.get('/devices', devices_controller.devices_list);
module.exports = router;

