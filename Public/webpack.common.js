const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        index:'./src/index.js',
        login:'./src/pages/loginpage/login.js',
        register:'./src/pages/registerpage/register.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js',
        clean:true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                include: path.resolve(__dirname, 'src') // Use path.resolve for include paths
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                type: 'asset/resource',
                include: path.resolve(__dirname, 'src/assets')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename:'index.html',
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pages/loginpage/login.html'),
            filename:'login.html',
            chunks:['login']
        }),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'src/pages/registerpage/register.html'),
            filename:'register.html',
            chunks:['register']
        })
    ]
};

module.exports = config;
