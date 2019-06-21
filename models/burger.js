var orm = require('../config/orm.js');

var burger = {
    // this is our .all from orm and making a callback function within all
    all: function(cb){
        orm.all('burgers', function(res)    {
            cb(res);
        })
    },
    // this update method allows to update burgers from our orm.js file
    update: function(id,cb) {
        orm.update('burgers', id,cb);
        }
}
// we are exporting our burger file to make it accesible to other files
module.exports = burger;