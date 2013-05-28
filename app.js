
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , band = require('./routes/band')
  , http = require('http')
  , path = require('path');

var app = express();

require('./db');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'mmm');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//General System routes
app.get('/', routes.index);
app.get('/dashboard', routes.dashboard);

//User Routes
app.get('/users', user.index);
app.get('/users/:uID', user.index);

//Band Routes
app.get('/bands', band.index);
app.get('/bands/:bID', band.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
