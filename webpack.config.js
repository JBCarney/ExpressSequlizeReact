var webpack = require('webpack');

module.exports = {
    entry: [
        './browser.js'
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"]
        }]
    },
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool:'source-map'
};