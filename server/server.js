if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

var express         = require('express');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var session         = require('express-session');
var path            = require('path');

var app = express();
app.set('port', (process.env.PORT || 2016));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    name: process.env.SESSION_NAME,
    resave: true,
    saveUninitialized: true
}));

app.use('/app', express.static(path.resolve(__dirname, '../build/app')));
app.use('/assets', express.static(path.resolve(__dirname, '../build/assets')));
app.use('/css', express.static(path.resolve(__dirname, '../build/css')));
app.use('/styles', express.static(path.resolve(__dirname, '../build/styles')));
app.use('/config', express.static(path.resolve(__dirname, '../build/config')));
app.use('/node_modules', express.static(path.resolve(__dirname, '../build/node_modules')));

app.get('/*', function(req, res) {  
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
