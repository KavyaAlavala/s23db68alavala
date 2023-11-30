var express = require('express');
var devices_controller= require('../controllers/devices');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

/* GET home page. */
router.get('/', devices_controller.devices_view_all_Page );
/* GET detail costume page */
router.get('/detail', secured, devices_controller.devices_view_one_Page);
/* GET create vehicle page */
router.get('/create', secured, devices_controller.devices_create_Page);
/* GET create update page */
router.get('/update', secured, devices_controller.devices_update_Page);
/* GET delete costume page */
router.get('/delete', secured, devices_controller.devices_delete_Page);
module.exports = router;
