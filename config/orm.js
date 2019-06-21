var connection = require('./connection.js');
// this will collect data from our database
var orm =   {
    all: function (tableInput, cb)  {
        connection.query('SELECT * FROM ' + tableInput + ';' function(err,
        result){
            if(err) throw err;
            // this is referring to our call back function
            cb(result)
        })
    }
}