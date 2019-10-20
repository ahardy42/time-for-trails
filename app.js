var express = require('express');
// var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// Serve static files from the React app
app.use(express.static("public"));
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use('/', indexRouter);

module.exports = app;
