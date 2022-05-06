 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin'); 
const devServer = require('./BaseConfig.js')

const scss = {
    devServer: devServer,
    entry: {},
    output: {},
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new IgnoreEmitPlugin(/\.(js|jsx)$/),
    ],
}

 

module.exports = scss 
