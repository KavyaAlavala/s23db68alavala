var devices = require('../models/devices');
// List of all devicess
exports.devices_list = function(req, res) {
res.send('NOT IMPLEMENTED: devices list');
};
// for a specific devices.
exports.devices_detail = function(req, res) {
res.send('NOT IMPLEMENTED: devices detail: ' + req.params.id);
};
// Handle devices create on POST.
exports.devices_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: devices create POST');
};
// Handle devices delete form on DELETE.
exports.devices_delete = function(req, res) {
res.send('NOT IMPLEMENTED: devices delete DELETE ' + req.params.id);
};
// Handle devices update form on PUT.
exports.devices_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: devices update PUT' + req.params.id);
};



// List of all devicess
exports.devices_list = async function(req, res) {
    try{
    thedevices = await devices.find();
    res.send(thedevices);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    