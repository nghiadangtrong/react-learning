var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app'
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                'query': {
                    presets: [ 'env', 'react', 'stage-2']
                }
            }
        ]
    }
};

module.exports = config;