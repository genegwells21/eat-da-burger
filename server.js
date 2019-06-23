// these are requiring our packages
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
// this is initializeing our Express package
var app = express();

app.use(express.static(__dirname + '/public'));
// this is initializing our bodyParser
app.use(bodyParser.urlencoded({
    extended:false
}))
// this is intializing our methodOverride which is used to utilize implementation of a method already being used
app.use(methodOverride('_method'));
// this is initializing our express handlebars
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
// we are setting our handlebars
app.set('view engine', 'handlebars');
// these are referencing out routes with require and a use method with a back slash
var routes = require('./controllers/routes.js');

app.use('/', routes);
// this is setting our port
var PORT = 3306;
app.listen(PORT)