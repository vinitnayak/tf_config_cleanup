const merge = require('webpack-merge');
const baseConfig = require('./webpack.common.js');
var path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = merge(baseConfig, {
  devtool: 'source-map',
});
if (process.env.NODE_ENV === "development") {
    var express = require('express')
    const port = 8080;
    var app = express()
    app.use('/', express.static(BUILD_DIR))
    app.listen(port)
}