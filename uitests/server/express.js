var path = require('path');
var router = require('./router');
var bodyParser = require('body-parser');
const BUILD_DIR = path.resolve(__dirname, '../../dist');

if (process.env.NODE_ENV === "development" || process.env.NODE_ENV ==='production') {
    var express = require('express')
    const port = 9091;
    var app = express()
    app.use('/', express.static(BUILD_DIR))
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
    app.listen(port);
    console.log('======================================================>');
    console.log('Starting Web server at http://localhost:'+port+'/');
    console.log('======================================================>');
    console.log('Starting JSON Server for mock REST APIs');
    router.approuter(app);
}