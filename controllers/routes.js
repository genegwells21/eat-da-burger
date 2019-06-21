var express = router('express');
var router = express.Router();
// this is a setting up our path with a get function
router.get('/', function(req, res)  {
    res.render('index');
})
module.exports = router;