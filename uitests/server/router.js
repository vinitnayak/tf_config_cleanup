/**
 * @author Vinit
 */
var request = require('request');
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
const EMPLOYEES_DATA_URL = '/employees*';
/**
 * approuter
 */
module.exports = {
    approuter: function (app) {
        //TF REST Calls
        app.get(EMPLOYEES_DATA_URL, function (req, res) {
            callServiceRequestGet(req.url, res);
        });
        app.post(EMPLOYEES_DATA_URL, function (req, res) {
            callServiceRequestPost(req.url, req.body, res);
        });
        app.delete(EMPLOYEES_DATA_URL, function (req, res) {
            callServiceRequestDelete(req.url, res);
        });
    },
};
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