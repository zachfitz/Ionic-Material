const webpack = require('webpack');
const path = require('path');
const uglifyPlugin = new webpack.optimize.UglifyJsPlugin();

var bowerComponentsPath = path.join(__dirname, '/bower_components');

module.exports = {
    context: __dirname,
    entry: './src/js/ionic-material.js',
    output: {
        libraryTarget: 'umd',
        library: 'ionicMaterial',
        path: __dirname + '/dist',
        filename: 'ionic.material.js'
    },
    resolve: {
        alias: {
            waves: path.join(bowerComponentsPath, 'waves/dist/waves.js')
        }
    },
    externals:{
        'angular': 'angular',
        'ionic': 'ionic'
    },
    plugins: [
        // uglifyPlugin
    ],
    target : 'web'
};
