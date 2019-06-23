var mysql = require('mysql');
// this is our connection to mysql with a createConnection method as well as our connection information
var connection = mysql.createConnection({
    host:'local connection',
    user:'root',
    password:'',
    database:'burgers_db'
});
// this is our connect method with a function
connection.connect(function(err)    {
    if(err)throw err;
    console.log("connected as id: " + connection.threadid);
})
module.exports = connection