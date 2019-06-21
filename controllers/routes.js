var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
// this is a setting up our path with a get function
router.get('/', function(req, res)  {
    // this is referencing the orm all method
    burger.all(function(burger_data)    {
console.log(burger_data);
    res.render('index');
})
})
router.put('/burgers/update', function(req,res) {
    burger.update(req.body.burger_id, function(result)  {
        console.log(result);
        res.redirect('/');
    });
});

module.exports = router;