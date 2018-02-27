const merge = require('webpack-merge');
var webpack = require('webpack');
const baseConfig = require('./webpack.common.js');
var path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'dist');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(baseConfig, {
  devtool: '',
  plugins: [
    // Minify JS
    new UglifyJsPlugin(),
    // Minify CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
});
if (process.env.NODE_ENV === "production") {
    var express = require('express')
    const port = 8080
    var app = express()
    app.use('/', express.static(BUILD_DIR))
    app.listen(port)
}