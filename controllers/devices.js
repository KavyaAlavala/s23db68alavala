var devices = require('../models/devices');
// List of all devicess
exports.devices_list = function(req, res) {
res.send('NOT IMPLEMENTED: devices list');
};
// for a specific Costume.
exports.devices_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await devices.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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

    // VIEWS
// Handle a show all view
exports.devices_view_all_Page = async function(req, res) {
    try{
    thedevices = await devices.find();
    res.render('devices', { title: 'devices Search Results', results: thedevices });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle devices create on POST.
exports.devices_create_post = async function(req, res) {
    console.log(req.body)
    let document = new devices();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    
    document.name = req.body.name;
    document.brand = req.body.brand;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
    //Handle Vehicle update form on PUT
exports.devices_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await devices.findById(req.params.id)
        // Do updates of properties
        if (req.body.name)
            toUpdate.name = req.body.name;
        if (req.body.brand) toUpdate.brand = req.body.brand;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};
    
    
    