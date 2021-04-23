var vegetable = require('../models/vegetable');
// List of all vegetables
exports.vegetable_list = async function(req, res) {
    try{
    theVegetables = await vegetable.find();
    res.send(theVegetables);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };

// List of all vegetables
// exports.vegetable_list = function(req, res) {
// res.send('NOT IMPLEMENTED: vegetable list');
// };
// for a specific vegatable.
exports.vegetable_detail = async function(req, res) {
    console.log("vegetable"  + req.params.id)
    try {
        result = await vegetable.findById( req.params.id)
        res.send(result)
    }catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle vegetable create on POST.
// Handle Costume create on POST.
exports.vegetable_create_post = async function(req, res) {
    console.log(req.body)
    let document = new vegetable();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.color = req.body.color;
    document.weight = req.body.weight;
    document.vitamins = req.body.vitamins;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
        console.log(err)
    res.send(err);
    res.status(500);
    }
    };
// Handle vegetable delete form on DELETE.
exports.vegetable_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await vegetable.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle vegetable update form on PUT.
exports.vegetable_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await vegetable.findById( req.params.id)
        if(req.body.color) toUpdate.color = req.body.color;
        if(req.body.weight) toUpdate.weight = req.body.weight;
        if(req.body.vitamins) toUpdate.vitamins = req.body.vitamins;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// VIEWS
// Handle a show all view
exports.vegetable_view_all_Page = async function(req, res) {
    try{
    theVegetables = await vegetable.find();
    console.log(theVegetables)
    res.render('vegetable', { title: 'vegetable Search Results', results: theVegetables });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
};
exports.vegetable_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await vegetable.findById(req.query.id)
        console.log(result)
        res.render('vegetabledetail', 
            { title: 'vegetable Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.vegetable_create_Page =  async function(req, res) {
    console.log("create view")
    try{
        res.render('vegetablecreate', { title: 'vegetable Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.vegetable_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await vegetable.findById(req.query.id)
        res.render('vegetableupdate', { title: 'vegetable Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.vegetable_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await vegetable.findById(req.query.id)
        res.render('vegetabledelete', { title: 'vegetable Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};