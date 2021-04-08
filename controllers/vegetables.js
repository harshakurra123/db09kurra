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
exports.vegetable_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: vegetable create POST');
};
// Handle vegetable delete form on DELETE.
exports.vegetable_delete = function(req, res) {
res.send('NOT IMPLEMENTED: vegetable delete DELETE ' + req.params.id);
};
// Handle vegetable update form on PUT.
exports.vegetable_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: vegatable update PUT' + req.params.id);
};