const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const csp = require('./app/csp');
const database = require('./app/database');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

var app = express();

// Setup a pug view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.pretty = true;

// If you want to use inline scripts use csp.NONCE in the correspnding directive,
// uncomment the following line and add a "nonce= nonce" pug/html attribute to
// the corresponding script
// app.use(csp.helpers.init_nonce)

// If you use ressources from external sources, you have to add them here.
app.use(csp({
    directives: {
        // If not other policy is defined the default policy is 'self'
        defaultSrc: [csp.SELF],
        // If you want to load ressources from a specific URL, add this URL
        // in the correspnding directive
        scriptSrc: [csp.SELF], //, csp.NONCE
        styleSrc: [csp.SELF],
        imgSrc: [csp.SELF, 'data:', 'via.placeholder.com'],
        // This prevents loading ressources using HTTP when the request origin
        // uses HTTPS
        blockAllMixedContent: true
    }
}));

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/favicon.ico', express.static(path.join(__dirname, "public", "res",
                                                 "images", "favicon.ico")));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
