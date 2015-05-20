const webpack = require('webpack');
const uglifyPlugin = new webpack.optimize.UglifyJsPlugin();

module.exports = {
    context: __dirname,
    entry: './src/js/ionic-material.js',
    output: {
        libraryTarget: 'umd',
        library: 'ionic-material',
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    externals:{
        'angular': 'angular'
    },
    plugins: [
        uglifyPlugin
    ]
};
