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
exports.vegetable_detail = function(req, res) {
res.send('NOT IMPLEMENTED: vegetable detail: ' + req.params.id);
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
    res.error(500,`{"error": ${err}}`);
    }
    };
// Handle vegetable delete form on DELETE.
exports.vegetable_delete = function(req, res) {
res.send('NOT IMPLEMENTED: vegetable delete DELETE ' + req.params.id);
};
// Handle vegetable update form on PUT.
exports.vegetable_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: vegatable update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.vegetable_view_all_Page = async function(req, res) {
    try{
    theVegetables = await vegetable.find();
    res.render('vegetable', { title: 'vegatable Search Results', results: theVegetables });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };