var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
var io = app.io = require('socket.io')();
var chat = require('./chat_namespace');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/user', require('./routes/user'));
app.use('/api/server', require('./routes/server'));

chat.createNameSpace(io);

module.exports = app;
