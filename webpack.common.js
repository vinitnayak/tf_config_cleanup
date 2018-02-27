var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
const APP_DIR = path.resolve(__dirname, 'src');
module.exports ={
    entry: [	
		APP_DIR + '/cf_index.js' // Your appʼs entry point
    ],
    output: {
        filename: 'cfBundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: { presets: [ 'es2015', 'react' ] }
              
            },
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader",
                publicPath: "/dist"
              })
            },
            {
              test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    },
                },
             ]
            }
          ]
    },
    externals: {
        fs: '{}',
        tls: '{}',
        net: '{}',
        console: '{}',
        react: 'React',
        'react-dom':'ReactDOM',
        redux:'Redux',
        'react-redux':'ReactRedux',
        'redux-form':'ReduxForm',
        'redux-thunk':'ReduxThunk',
        'prop-types':'PropTypes'
    },
    resolve: {
        extensions: ['jsx', '.js','.css']
    },
    plugins:[
        new webpack.EnvironmentPlugin(
            ['NODE_ENV',]),
        new CopyWebpackPlugin([
            { from: './index.html', to: '../dist/index.html' },
            { from: './manifest.json', to: '../dist/manifest.json' },
            { from: './cf.json', to: '../dist/cf.json' },
            {
                context: './res',
                from: '**/*',
                to: '../dist/res'
            }
        ]),  
        new CleanWebpackPlugin(['dist/*.*', 'dist/res', 'dist/src']),
        new ExtractTextPlugin({filename: 'cfBundle.css', allChunks: true}),
        new ProgressBarPlugin()
    ]
};