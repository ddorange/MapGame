var webpack = require('webpack'),
    glob = require('glob'),
    _ = require('lodash');

// bower alias
var bower_dir = __dirname + '/bower_components';

// webpack config obj
var config = {
    
    context: __dirname + '/s',
    
    entry: {
        vendors: [ 'lodash', 'jquery', 'velocity', 'velocity.ui', 'vue' ],
    },
    
    resolve: {
        alias: {}
    },
    
    output: {
        path: './dist/',
        publicPath: '/dist/',
        filename: '[name].bundle.js'
    },
    
    module: {
        noParse: [],
        loaders: [
            { test: /\.css$/, loader: 'style/url!file?name=[name].css!' }        // load css using link tag
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.ProvidePlugin({
            _: 'lodash',
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],

    devtool: '#source-map',

    // my util mothod
    addVendor: function (name, path, isJqPlugin) {
        this.resolve.alias[name] = path;

        if (!isJqPlugin) {
            this.module.noParse.push(new RegExp(path));
        }
    },
};


// vendorを追加
config.addVendor('lodash',      bower_dir + '/lodash/dist/lodash.underscore.min.js');
config.addVendor('jquery',      bower_dir + '/jquery/dist/jquery.min.js');
config.addVendor('velocity',    bower_dir + '/velocity/velocity.min.js', true);
config.addVendor('velocity.ui', bower_dir + '/velocity/velocity.ui.min.js', true);
config.addVendor('vue',         bower_dir + '/vue/dist/vue.js');


// ./s 配下の entry.js を検索して config.entry  に追加する
var files = glob.sync('./s/**/*/entry.js'),
    regex = /(^.\/s\/)(.*)(?=\/entry.js)/;

_.each(files, function (file) {
    var name = file.toString().match(regex)[2],
        path = './' + name + '/entry.js';

    config.entry[name] = path;
});


module.exports = config;