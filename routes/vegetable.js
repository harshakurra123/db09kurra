var express = require('express');
const vegetable_controlers= require('../controllers/vegetables');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
/* GET vegetables */
router.get('/', vegetable_controlers.vegetable_view_all_Page );
/* GET update costume page */
router.get('/update', secured, vegetable_controlers.vegetable_update_Page);
router.get('/create', secured, vegetable_controlers.vegetable_create_Page);
router.get('/delete', secured, vegetable_controlers.vegetable_delete_Page);
module.exports = router;