const merge = require('webpack-merge');
var webpack = require('webpack');
const baseConfig = require('./webpack.common.js');
const WebpackShellPlugin = require('webpack-shell-plugin');
var path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'dist');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

if (process.env.NODE_ENV == 'production') {
  baseConfig.plugins.push(new WebpackShellPlugin({onBuildEnd:['npm run start-server','node ./uitests/server/express.js']}));
}

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