const webpackCommon = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const {merge} = require("webpack-merge");

const prodConfig={
    mode:"production",
    devtool:"source-map",
    optimization:{
        minimize:true,
        minimizer:[
            new TerserPlugin({
                extractComments:false,  
            }),
            new CssMinimizerPlugin({
            }
            )
        ]
    } 
}

const Config=merge(webpackCommon,prodConfig);

module.exports= Config;