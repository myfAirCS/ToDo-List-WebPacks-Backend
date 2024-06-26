const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common.js');

const devConfig = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        compress: true,
        port: 8080,
        open: true,
        hot:true 
    }
};

const webpackConfig = merge(webpackCommon, devConfig); // Merge webpackCommon with devConfig

module.exports = webpackConfig;
