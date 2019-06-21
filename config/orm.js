var connection = require('./connection.js');
// this will collect data from our database
var orm =   {
    all: function (tableInput, cb)  {
        connection.query('SELECT * FROM ' + tableInput + ';', function(err,
        result){
            if(err) throw err;
            // this is referring to our call back function
            cb(result)
        })
    },
    // this is our update method that allows us to udpate our table, whether it is devoured and references our call back
    update: function (tableInput, condition, cb){
    connection.query('UPDATE' + tableInput + ' SET devoured=true WHERE id='+condition+';', function(err, result) {
        if(err) throw err;
        cb(result);

})
}
}
module.exports = orm;