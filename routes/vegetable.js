var express = require('express');
const vegetable_controlers= require('../controllers/vegetables');
var router = express.Router();
/* GET vegetables */
router.get('/', vegetable_controlers.vegetable_view_all_Page );
module.exports = router;