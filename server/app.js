var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

require('dotenv').config()

// This is the mLab server || TODO - convert whole url to the env mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds157571.mlab.com:57571/sydney-escape`)
// This is the local server
mongoose.connect(`mongodb://localhost/sydney-escape`)
const { connection: db } = mongoose;

var index = require('./routes/index');
const apiv1 = require('./routes/api/v1/index');
var users = require('./routes/users');

var app = express();

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to SE database')
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//
// // pass the passport middleware
// app.use(passport.initialize());
//
// // load passport strategies
// const localSignupStrategy = require('./passport/local-signup');
// const localLoginStrategy = require('./passport/local-login');
// passport.use('local-signup', localSignupStrategy);
// passport.use('local-login', localLoginStrategy);
//
// pass the authenticaion checker middleware
// const authCheckMiddleware = require('./middleware/auth-check');
// app.use('/api', authCheckMiddleware);

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

//index being which router file to use
app.use('/', index);
app.use('/bookings', index);
app.use('/rooms', index);
app.use('/api/v1', apiv1);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
