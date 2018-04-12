/**
 * @author Vinit
 */
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');
const BUILD_DIR = path.resolve(__dirname, '../../dist');
/**
 * app router constants
 */
const host = 'http://localhost:'
const port = '30026';
const svcpath = '/svc/';
const apiversion = 'v1';
const post = 'POST';
const get = 'GET';
const mdelete = 'DELETE';
/**
 * approuter
 * @param {*} app 
 */
approuter = (app) => {
    //TF REST Calls
    app.get('/*', function (req, res) {
        callServiceRequestGet(req.url, res);
    });
    app.post('/*', function (req, res) {
        callServiceRequestPost(req.url, req.body, res);
    });
    app.delete('/*', function (req, res) {
        callServiceRequestDelete(req.url, res);
    });
}
/**
 * callServiceRequestGet
 * @param {*} requrl 
 * @param {*} res 
 */
callServiceRequestGet = (requrl, res) => {
    const options = {
        url: `${host}${port}${svcpath}${apiversion}${requrl}`,
        method: get
    };
    request(options).pipe(res);
}
/**
 * callServiceRequestPost
 * @param {*} requrl 
 * @param {*} postData 
 * @param {*} res 
 */
callServiceRequestPost = (requrl, postData, res) => {
    const options = {
        method: post,
        body: postData,
        json: true,
        url: `${host}${port}${requrl}`,
    };
    request(options, function (err, res, body) {
        if (err) {
            console.error('error posting json: ', err)
            throw err
        }
    }).pipe(res);
}
/**
 * callServiceRequestDelete
 * @param {*} requrl 
  * @param {*} res 
 */
callServiceRequestDelete = (requrl, res) => {
    const options = {
        method: mdelete,
        json: true,
        url: `${host}${port}${requrl}`,
    };
    request(options, function (err, res, body) {
        if (err) {
            console.error('error deleting json: ', err)
            throw err
        }
    }).pipe(res);
}
/**
 * Start Express Server localhost@port
 */
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === 'production') {
    var express = require('express')
    const port = 9091;
    var app = express()
    app.use('/', express.static(BUILD_DIR))
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
    app.listen(port);
    console.log('======================================================>');
    console.log('Starting Web server at http://localhost:' + port + '/');
    console.log('======================================================>');
    console.log('Starting JSON Server for mock REST APIs');
    approuter(app);
}