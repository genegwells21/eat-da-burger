var orm = require('../config/orm.js');

var burger = {
    // this is our .all from orm and making a callback function within all
    all: function(cb){
        orm.all('burgers', function(res)    {
            cb(res);
        })
    }
}
// we are exporting our burger file to make it accesible to other files
module.exports = burger;