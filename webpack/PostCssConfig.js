 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devServer = require('./BaseConfig.js')

const scss = {
    devServer: devServer,
    entry: {},
    output: {},
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
}

 

module.exports = scss 
