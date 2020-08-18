var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
// require('./models/User/User');
require('./models/Money');
require('./models/Currency');
require('./models/Loger');


// var uri = 'mongodb://localhost/shamatdb';
// var options = {
// user: 'root',
// pass: 'toor'
// }
// mongoose.connect(uri, options, function(err){
// if (err) throw err;
// // if no error == connected
// });
mongoose.connect('mongodb://localhost/shamatdb');
mongoose.set('debug', true);
mongoose.connection.on('open', function() {
  console.log('huzzah! connection open');
  });
  mongoose.connection.on('connecting', function() {
  console.log('connecting');
  });
  mongoose.connection.on('connected', function() {
  console.log('connected');
  });
  mongoose.connection.on('reconnected', function() {
  console.log('reconnected');
  });
  mongoose.connection.on('disconnecting', function() {
  console.log('disconnecting');
  });
  mongoose.connection.on('disconnected', function() {
  console.log('disconnected');
  });
  mongoose.connection.on('error', function(error) {
  console.log('error', error);
  });
  mongoose.connection.on('close', function() {
  console.log('connection closed');
  });



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/test');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
app.listen(3001);