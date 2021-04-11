var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var vegetable_controller = require('../controllers/vegetables');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a vegetable.
router.post('/resource/vegatable', vegetable_controller.vegetable_create_post);
// DELETE request to delete vegetable.
router.delete('/resource/vegetable/:id', vegetable_controller.vegetable_delete);
// PUT request to update vegetable.
router.put('/resource/vegetable/:id', vegetable_controller.vegetable_update_put);
// GET request for one vegetable.
router.get('/resource/vegetable/:id', vegetable_controller.vegetable_detail);
// GET request for list of all vegetable items.
router.get('/resource/vegetable', vegetable_controller.vegetable_list);
/* GET detail vegetable page */
router.get('/detail', vegetable_controller.vegetable_view_one_Page);
/* GET create costume page */
router.get('/create', vegetable_controlers.vegetable_create_Page);
/* GET create update page */
router.get('/update', vegetable_controller.vegetable_update_Page);
module.exports = router;