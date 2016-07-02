var bodyParser = require('body-parser');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var port = process.env.PORT || 2016;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/app', express.static(path.resolve(__dirname, '../build/app')));
app.use('/assets', express.static(path.resolve(__dirname, '../build/assets')));
app.use('/css', express.static(path.resolve(__dirname, '../build/css')));
app.use('/lib', express.static(path.resolve(__dirname, '../build/lib')));
app.use('/styles', express.static(path.resolve(__dirname, '../build/styles')));
app.use('/node_modules', express.static(path.resolve(__dirname, '../build/node_modules')));

app.get('/*', function(req, res){
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});