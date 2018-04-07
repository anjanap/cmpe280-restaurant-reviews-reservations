var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var engines = require('consolidate');

var index = require('./routes/index');
var users = require('./routes/users');
var signin = require('./routes/signin');
var signup = require('./routes/signup');
var reviews = require('./routes/reviews');

var app = express();
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/cmpe280";

/*MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("DB connected");
});*/
//view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.engine('html', engines.mustache);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/views'));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/signin', signin.login);
app.use('/signup', signup.signup);
app.use('/addreview', reviews.add);
app.use('/allreviews', reviews.display);
app.use('/updatereview', reviews.update);
app.use('/deletereview', reviews.remove);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error.html');
});

module.exports = app;
