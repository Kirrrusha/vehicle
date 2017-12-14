var webpack = require('webpack');
var path = require('path');
// var AsyncAwaitPlugin = require('webpack-async-await') ;
//var HtmlPlugin = require('html-webpack-plugin');


module.exports = {

    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    /* plugins: [
        new HtmlPlugin()
    ], */
    /* plugins: [
        new AsyncAwaitPlugin(options)
      ], */

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }

};
