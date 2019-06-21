// these are requiring our packages
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// this is initializeing our Express package
var app = express();

app.use(express.static(_dirname + '/public'));
// this is initializing our bodyParser
app.use(bodyParser.urlencoded({
    extended:false
}))
// this is intializing our methodOverride which is used to utilize implementation of a method already being used
app.use(methodOverride('_method'));
// this is initializing our express handlebars
app.engine('handlebars', exhbs({
    defaultLayout: 'main'
}));
// we are setting our handlebars
app.set('view engine', 'handlebars');
// this is setting our port
var PORT = 3000;
app.listen(PORT)