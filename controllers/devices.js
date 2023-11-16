var devices = require('../models/devices');
// List of all devicess
exports.devices_list = function (req, res) {
    res.send('NOT IMPLEMENTED: devices list');
};

// for a specific Costume.
exports.devices_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await devices.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle devices create on POST.
exports.devices_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: devices create POST');
};
// Handle devices delete form on DELETE.
exports.devices_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await devices.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle devices update form on PUT.
exports.devices_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: devices update PUT' + req.params.id);
};



// List of all devicess
exports.devices_list = async function (req, res) {
    try {
        thedevices = await devices.find();
        res.send(thedevices);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.devices_view_all_Page = async function (req, res) {
    try {
        thedevices = await devices.find();
        res.render('devices', { title: 'devices Search Results', results: thedevices });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle devices create on POST.
exports.devices_create_post = async function (req, res) {
    console.log(req.body)
    let document = new devices();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object

    document.name = req.body.name;
    document.brand = req.body.brand;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
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


// Handle a show one view with id specified by query
exports.devices_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await devices.findById(req.query.id)
        res.render('devicesdetail', { title: 'devices Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a vehicle.
// No body, no in path parameter, no query.
// Does not need to be async
exports.devices_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('devicescreate', { title: 'devices Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.devices_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await devices.findById(req.query.id)
        res.render('devicesupdate', { title: 'devices Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle a delete one view with id from query
exports.devices_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await devices.findById(req.query.id)
        res.render('devicesdelete', {
            title: 'Devices Delete', toShow: result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};



